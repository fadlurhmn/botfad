const { RemoveBgResult, removeBackgroundFromImageBase64 } = require('remove.bg')

/**
 * Remove Image Background
 *
 * This is Premium feature, Check premium feature at https://trakteer.id/red-emperor/showcase or chat Author for Information.
 *
 * @param  {String} base64img
 */
module.exports = removebg = (base64img) => new Promise((resolve, reject) => {
    console.log('Removing image background...')
    removeBackgroundFromImageBase64({
        base64img,
        apiKey: 'tzt46GWQ1bS1WS6kaT7VcSn6',
        size: 'preview',
        type: 'auto',
        format: 'jpg'
    })
        .then((result = RemoveBgResult) => resolve(`data:image/jpeg;base64,${result.base64img}`))
        .catch((err) => reject(JSON.stringify(err)))
})
