# Contributing

## Adding flags

Flags are stored in the `flags` folder. Follow these steps to add a new one:

1. Create a new js file in the `data/flags` folder with the [id of the flag](#choosing-an-id-for-a-flag): `flagid.js`
2. Fill the file out with the flag's info. You can use the format of [`pride_1978_sevenStripes.js`](./data/flags/pride_1978_sevenStripes.js) as a reference.
3. Add the flag to the `flags/index.js` file.
4. Add the flag svg file to `flags/svg` folder. Generally I source the SVGs from wikipedia, if you need any help creating them feel free to message me on [Twitter](https://twitter.com/joehart).
5. Then import the svg to the `flagid.js` file.
6. Raise a PR for adding the flag

Note if adding multiple flags, please raise a PR per individual flag added.

## Choosing an ID for a Flag

This is the current model I'm using, this can change in the future but it seems to work for now, the general idea is all IDs follow this format:

```
FLAGNAME_FLAGYEAR_MODIFIER
```

Generally `FLAGNAME` should be what the flag is most commonly referred to. and `FLAGYEAR` should be when the flag is generally agreed to have gotten usage online or in the physical world.

The third part `MODIFIER` is optional, currently it is only used to distinguish between the 8 and 7 striped versions of Gilbert Baker's original Pride flags. The idea is if there are two flags with the same name from the same year, the modifier should be the most easily understandable property to set them apart from each other.

This is not a hard and fast system, generally in our community the symbols we use are fluid and dynamic so I want to avoid being too strict with how to define them.

## I would like to help is there anything currently being worked on?

I'm going to keep the Project tab of this GitHub Repo up to date, and also any open issues are free to be had!
