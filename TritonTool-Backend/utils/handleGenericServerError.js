function handleGenericServerError(error, res) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
}

module.exports = { handleGenericServerError };