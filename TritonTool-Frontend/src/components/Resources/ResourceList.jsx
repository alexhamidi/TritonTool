import React from 'react';

export default function ResourceList({getResourcesByLabel, currentLabel, authenticated, handleDeleteLabel, resources, handleDeleteResource, handleEditResource}) {
  return (
    <>
      <div className='labelTitleContainer'>
        <h1 className='labelTitle'>{currentLabel || 'All Resources'}</h1>
        {currentLabel && authenticated && (
          <button
            className='input deleteButton' 
            onClick={() => handleDeleteLabel(currentLabel)}
          >
            Delete Label
          </button>
        )}
      </div>
      <div className="resources">
        {getResourcesByLabel(currentLabel).length > 0 ? (
            getResourcesByLabel(currentLabel)
            .sort((a, b) => {
                const lengthDiff = (b.description?.length || 0) - (a.description?.length || 0);
                if (lengthDiff !== 0) return lengthDiff;
                return a.resource_name.localeCompare(b.resource_name);
            })
            .map((resource, index) => (
                <div className="resource card borderedCard" key={index}>
                {authenticated && (
                    <>
                    <i onClick={() => handleDeleteResource(resource.resource_id)} className="deleteResource fa-solid fa-xmark fa-lg"></i>
                    <i onClick={() => handleEditResource(resource)} className="editResource fa-solid fa-edit"></i>
                    </>
                )}
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <strong className="resourceTitle">{resource.resource_name}</strong>
                </a>
                {resource.description && <p className="resourceDescription">{resource.description}</p>}
                </div>
            ))
        ) : (
            <p>No resources for this label</p>
        )}
        </div>
    </>
  );
}