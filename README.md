# React (Filtering movies feature)

To filter the movies by genre we need to keep the original states
from being changed because this is the single source of truth.
The idea is to add another state for filtered movie. send the filtered movies
to the component that will display the movies instead of the original state.
**MovieList Component** is the one responsible for rendering movie and it
will receive the filtered movies as **props**.

## Problem

If we use the filtering logic on the orginal array we will get wrong result.
say for example the original state is:
**numbers = [1, 2, 3, 4]** if we fillter by even number we will got **[2, 4]**.
now the orginal state has changed to **[2, 4]**, so if we make another filter
for example on odd number we will got wrong result because we will apply
the filter to **[2,4]** not to **[1, 2, 3, 4]**

# install

```
  npm install
  npm run dev
```
