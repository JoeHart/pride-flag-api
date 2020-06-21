# 🏳️‍🌈 Pride Flag API

This is an API to list data about various LGBTQA+ Pride Flags, delivered in JSON.

## Using the API

### Fetch a Flag:

`https://pride.dev/api/flags/${id}`

This will return the JSON object of the flag specified.

### Fetch a Flag's SVG

`https://pride.dev/api/flags/${id}/SVG`

This will return the SVG of the flag specified.

### Fetch all flags

`https://pride.dev/api/flags`

This will return all flags specified.

### Search flags

`https://pride.dev/api/flags?search=trans`

This will return all flags where the name contains that search term.

## Contributing

### Adding flags

Flags are stored in the `flags` folder. To add a new one simply:

1. Create a new js file with the name of the flag `flagname.js`
2. Fill the flag out with it's info.
3. Add the flag to the `flags/index.js` file
4. Raise a PR for adding the flag
