# Redux chat

![](https://raw.githubusercontent.com/lewagon/react-redux-images/master/redux/redux-chat.png)

### Setup

Run
```bash
yarn start
```
and open a browser at `http://localhost:8080`.


### Features

1. Store a list of messages
2. Store a list of channels
3. Store the selected channel
4. Store the current username

### User Stories

1. [x] On page load, the browser prompts me for a username
1. [x] After the username prompt, the chat loads with a default channel selected. Messages appear and scroll down to the most recent
1. [x] Focus is set on message box on load
1. [x] I can type a message and post it. It instantly appears right above the message box, and the message box clears. Focus is kept on message box
1. [x] When I post a message, it's under the username I set on page load
1. [x] When I click on another channel, the messages from the previous one disappear, and the messages from the newly selected channel appear

## Pending to-do

### 1. Colorize usernames

Replicate Slack colorized usernames showcased in the screenshot above. [This StackOverflow thread](https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript) will help you.

### 2. Emojis

Have a look at [react-emojione](https://www.npmjs.com/package/react-emojione). Try to add it to the project and use it in the `<Message />` component.