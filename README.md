# Deploy to GitHub Pages

- Install [storybook deployer](https://github.com/storybook-eol/storybook-deployer):
  ```sh
    npm i @storybook/storybook-deployer --save-dev
  ```
- Then add a NPM script like this for github page:
  ```json
    {
      "scripts": {
        "deploy-storybook": "storybook-to-ghpages"
      }
    }
  ```
- If you have previously built your storybook output (through a different CI step, etc) and just need to publish it, specify the directory like this:
  ```sh
    npm run deploy-storybook -- --ci --existing-output-dir=storybook-static
  ```
- If you are deploying Storybook to GitHub Pages from a repository belonging to an organization account on GitHub, you may need to specify a ${{ github.actor }} in addition to the ${{ secrets.GITHUB_TOKEN }} for your build step to be able to authenticate properly.
  ```yml
    ...
    env:
      GH_TOKEN: ${{ github.actor }}:${{ secrets.GITHUB_TOKEN }}
  ```
