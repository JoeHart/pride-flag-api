This is an API to list data about various LGBTQA+ Pride Flags, delivered as JSON by REST or GraphQL. This isn't an exhaustive list, it's just ones I've added for now. If there are any missing let me know or open a Pull Request 😄

## Using the API

Feel free to use this API for demos and fun things, I'd avoid using it for anything important 😅.

### GraphQL

Primarily this is meant to be a GraphQL API. Simply fire queries to the following endpoint:

```
https://pride.dev/api/graphql
```

You can view the schema and play with some queries at the [GraphQL Playground](https://pride.dev/api/graphql).

Example Query:

```
query {
  flag(id: "transgender_1999") {
    id
    name
    year
    colors{
      name
      r
      g
      b
    }
    svg
  }
}

```

Example Response:

```
{
  "data": {
    "flag": {
      "id": "transgender_1999",
      "name": "Transgender",
      "year": "1999",
      "colors": [
        {
          "name": "light blue",
          "r": 91,
          "g": 206,
          "b": 250
        },
        {
          "name": "pink",
          "r": 245,
          "g": 169,
          "b": 184
        },
        {
          "name": "white",
          "r": 255,
          "g": 255,
          "b": 255
        }
      ],
      "svg": "<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480"><path fill="#5BCEFA" d="M0 0h800v480H0z"/><path fill="#F5A9B8" d="M0 96h800v288H0z"/><path fill="#FFF" d="M0 192h800v96H0z"/></svg>"
    }
  }
}
```

### Fetch a Flag:

```
https://pride.dev/api/flags/${id}
```

This will return the JSON object of the flag specified.

### Fetch a Flag's SVG

```
https://pride.dev/api/flags/${id}/SVG
```

This will return the SVG of the flag specified.

### Fetch all flags

```
https://pride.dev/api/flags
```

This will return all flags specified.

### Search flags

```
https://pride.dev/api/flags?search=trans
```

This will return all flags where the name contains that search term.

## Why have you built this?

I started this in Pride Month 2020, trapped inside due to Corona and thought I'd celebrate Pride by making an API instead of going to the parade.

And I also wanted a fun API to use in side-projects/talks/workshops.

Plus I noticed the domain `pride.dev` was still available and thought it was just too cool not to do something with it.

## Who are you?

Hi I'm [Joe Hart](https://www.joehart.co.uk) 👋. You can find me on [twitter](https://twitter.com/JoeHart) and tell me what you think, request features or flags.

## Contributing

### Adding flags

Flags are stored in the `flags` folder. To add a new one simply:

1. Create a new js file with the id of the flag `flagid.js`
2. Fill the flag out with it's info.
3. Add the flag to the `flags/index.js` file
4. Raise a PR for adding the flag

### Choosing an ID for a Flag

This is the current model I'm using, this can change in the future but it seems to work for now, the general idea is all IDs follow this format:

```
FLAGNAME_FLAGYEAR_MODIFIER
```

Generally `FLAGNAME` should be what the flag is most commonly referred to. and `FLAGYEAR` should be when the flag is generally agreed to have gotten usage online or in the physical world.

The third part `MODIFIER` is optional, currently it is only used to distinguish between the 8 and 7 striped versions of Gilbert Baker's original Pride flags. The idea is if there are two flags with the same name from the same year, the modifier should be the most easily understandable property to set them apart from each other.

This is not a hard and fast system, generally in our community the symbols we use are fluid and dynamic so I want to avoid being too strict with how to define them.

### I would like to help is there anything currently being worked on?

I'm going to keep the Project tab of this GitHub Repo up to date, and also any open issues are free to be had!

## What's that cool font you're using on pride.dev?

It's called Gilbert and it's super cool, you can read more about is on the [font's website](https://www.typewithpride.com/).
