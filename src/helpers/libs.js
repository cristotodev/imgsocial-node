const helper = {};

/**
 * Generate a random name for the images,
 * 
 * @returns A String with the new name for the image
 */
helper.randomName = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomName = '';
    for (let i = 0; i < 6; i++) {
        randomName += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return randomName;
}

module.exports = helper;