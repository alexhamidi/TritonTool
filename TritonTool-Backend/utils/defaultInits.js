async function addDefaultCalendar(defaultCalendar, userID, client) {
    await client.query(
        'INSERT INTO calendars (user_id, calendar_name) VALUES ($1, $2)',
        [userID, defaultCalendar]
    );
}

//adds the default resources (from data/defaultResources.js) to the initialized user's database
async function addDefaultResources(defaultResources, userID, client) {
    for (const resource of defaultResources) {
        await client.query(
            'INSERT INTO resources (user_id, resource_name, description, label_name, link) VALUES ($1, $2, $3, $4, $5)',
            [userID, resource.resource_name, resource.description, resource.label_name, resource.link]
        );
    }
}

async function addDefaultLabels(defaultLabels, userID, client) {
    for (const label of defaultLabels) {
        await client.query(
            'INSERT INTO labels (user_id, label_name) VALUES ($1, $2)',
            [userID, label.label_name]
        );
    }
}


module.exports = {
    addDefaultCalendar,
    addDefaultResources,
    addDefaultLabels,
};