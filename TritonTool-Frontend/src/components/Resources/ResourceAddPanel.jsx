import React, { useState } from 'react';


export default function ResourceAddPanel({editing, newResource, setNewResource, labels, handleAddResource, resetAddResourceForm, addError, handleInputLabelChange, handleNewLabelSubmit, newLabelSelected, newLabelValue, setNewLabelValue}) {



return (
    <div className='resourceAddPanel card borderedCard'>
        <h2>{editing ? 'Edit Resource' : 'Add New Resource'}</h2>
        {['resource_name', 'link', 'description'].map(field => (
            <input 
                key={field}
                className='input resourceAddText'
                name={field}
                value={newResource[field]}
                onChange={(e) => setNewResource(prev => ({ ...prev, [field]: e.target.value }))}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ') + (field === 'description' ? ' (optional)' : '')}
            />
        ))}
        <div className='labelSelectArea'>
            <select 
                className='input'
                name="label"
                value={newResource.label_name}
                onChange={handleInputLabelChange}
            >
                <option value="">Select a label</option>
                {labels.map((label, index) => (
                    <option value={label.label_name} key={index}> {label.label_name} </option>
                ))}
                <option value="new">New Label</option>
            </select>
            {newLabelSelected && (
                <>
                    <input 
                        className='input'   
                        id='newLabelText'
                        value={newLabelValue}
                        onChange={(e) => setNewLabelValue(e.target.value)}
                        placeholder="Label Name"
                    />
                    <button className='input' onClick={handleNewLabelSubmit}> Create </button>
                </>
            )}
        </div>
        <br/>
        <button id='addResourceSubmit' className='input' onClick={handleAddResource}>Add</button>
        <button className='input' onClick={resetAddResourceForm}>Cancel</button>
        {addError && <div> {addError}</div>}
    </div>    
  )
}
