import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ResourceAddPanel from '../components/Resources/ResourceAddPanel';
import ResourceList from '../components/Resources/ResourceList';
import { useAuthErrorHandler } from '../utils/useAuthErrorHandler';
import { useNavigate } from 'react-router-dom';

export default function Resources({authenticated, setAuthenticated, BACKEND_URL}) {
    const [resources, setResources] = useState([])
    const [labels, setLabels] = useState([])
    const [currentLabel, setCurrentLabel] = useState('')
    const [addResource, setAddResource] = useState(false)
    const [editing, setEditing] = useState(false) //maybe elim 
    const [editingID, setEditingID] = useState('')
    const [addError, setAddError] = useState(null)
    const [newLabelSelected, setNewLabelSelected] = useState(false)
    const [newLabelValue, setNewLabelValue] = useState('')

    const [newResource, setNewResource] = useState({
        resource_name: '',
        link: '',
        description: '',
        label_name: ''
    });
    const navigate = useNavigate()

    //===================================[Authorization and Initialization]===================================

    const handleAuthError = useAuthErrorHandler(setAuthenticated);

    useEffect(() => {
        const storedLabel = sessionStorage.getItem("currentLabel") || "";
        setCurrentLabel(storedLabel);
    }, []);
    function handleLabelChange(label_name) {
        sessionStorage.setItem("currentLabel", label_name);
        setCurrentLabel(label_name);
    }
     
    useEffect(() => {
        fetchResources();
        fetchLabels()
    }, [authenticated]);

    async function fetchLabels() {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/${authenticated ? '' : 'default'}labels`, { withCredentials: true });
            setLabels(response.data);  
        } catch (error) {
            console.error('Error fetching labels:', error);
        }
    }

    async function fetchResources() {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/${authenticated ? '' : 'default'}resources`, { withCredentials: true });
            console.log(response.data)
            setResources(response.data);  
        } catch (error) {
            console.error('Error fetching resources:', error);
        }
    }


    //===================================[Utility Functions]===================================

    //utility function for resetting the form
    function resetAddResourceForm() {
        setEditingID('');
        setAddError(null);
        setAddResource(false);
        setNewLabelSelected(false)
        setEditing(false);
        setNewResource({ resource_name: '', link: '', description: '', label_name: '' });
    }

    //utility function for changing information about the new resource
    function handleInputLabelChange(e) {
        const label_name = e.target.value;
        setNewLabelSelected(label_name === 'new');
        setNewResource(prev => ({ ...prev, label_name }));
    }

    function handleEditResource(resource) {
        setEditingID(resource.resource_id);
        setAddResource(true);
        setEditing(true);
        setNewResource({
            resource_name: resource.resource_name,
            link: resource.link,
            description: resource.description,
            label_name: resource.label_name,
        });
    }

    //===================================[Function for adding a new label]===================================

    async function handleNewLabelSubmit() {
        try {
            await axios.post(`${BACKEND_URL}/api/addresource`, 
                {label_name: newLabelValue},
                { withCredentials: true });
            if (editing) await handleDeleteResource(editingID);
            fetchResources();
            resetAddResourceForm();
            setNewResource(prev => ({ ...prev, label: newLabelValue }));
            setNewLabelSelected(false);
            setNewLabelValue('');
        } catch (error) {
            if (error.response.status === 409)  setAddError('Error: label already exists');
            console.error('Error adding label:', error);            
        }
    }

     //===================================[Functionalities for adding a resource to a user's account (once submitted)]===================================

     async function handleAddResource() {
        if (newResource.resource_name === '' || newResource.link === '' ||  newResource.label === '') {
            setAddError('Please fill in all fields');
            return;
        }
        try {
            await axios.post(`${BACKEND_URL}/api/addresource`, newResource, { withCredentials: true });
            if (editing) await handleDeleteResource(editingID);
            fetchResources();
            resetAddResourceForm();
        } catch (error) {
            console.error('Error adding resource:', error);
        }
    }

    //===================================[Backend-Facing functionalities for deleting labels and resources]===================================

    async function handleDeleteResource(resource_id) {
        try {
            await axios.delete(`${BACKEND_URL}/api/deleteresource/${encodeURIComponent(resource_id)}`, { withCredentials: true });
            fetchResources();
        } catch (error) {
            console.error('Error deleting resource:', error);
        }
    }

    async function handleDeleteLabel(label) {
        setCurrentLabel('');
        try {
            await axios.delete(`${BACKEND_URL}/api/deletelabel/${encodeURIComponent(label)}`, { withCredentials: true });
            fetchResources();
            fetchLabels();
        } catch (error) {
            console.error('Error deleting label:', error);
        }
    }

   

    function getResourcesByLabel (label_name) {
        return (resources.filter(resource => (
            (resource.label_name === label_name || label_name === "")
        )))
    }

 

    return (
        <div className='page resourcesPage'>
            <header className='resourceHeading'> 
                {authenticated ? (
                    <button onClick={() => setAddResource(true)} className='input'>Add New Resource</button>
                ) : (
                    <>
                        <button className='input' onClick={() => navigate('/login')}>login</button>
                        <p className='loginto'><strong>to add new courses.</strong></p>
                    </>
                )}
                <select value={currentLabel} className='input' onChange={(e) => handleLabelChange(e.target.value)}>
                    <option value=""> All Resources </option>
                    {labels.map((label, index) => (
                        <option value={label.label_name} key={index}> {label.label_name} </option>
                    ))}
                </select>
            </header>
            <ResourceList
                getResourcesByLabel = {getResourcesByLabel}
                currentLabel={currentLabel}
                authenticated={authenticated}
                handleDeleteLabel={handleDeleteLabel}
                resources={resources}
                handleDeleteResource={handleDeleteResource}
                handleEditResource={handleEditResource}
            />
            {addResource && (
                <ResourceAddPanel
                    editing = {editing}
                    newResource = {newResource}
                    setNewResource = {setNewResource}
                    labels = {labels}
                    handleAddResource = {handleAddResource}d
                    resetAddResourceForm = {resetAddResourceForm}
                    addError = {addError}                    
                    handleInputLabelChange = {handleInputLabelChange} 
                    newLabelSelected = {newLabelSelected}      
                    handleNewLabelSubmit = {handleNewLabelSubmit}         
                    newLabelValue = {newLabelValue}         
                    setNewLabelValue= {setNewLabelValue}  
                />
            )}
        </div>
    );
}