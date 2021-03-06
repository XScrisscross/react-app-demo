// react
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// mount-window
import '~apis'
import '~utils'
import '~env'

// main
import App from '~views'
import Test from '~test'
import store from '~redux'

// gloable-css
import 'normalize.css/normalize.css'
import 'antd/dist/antd.less'
import '~assets/css/app.scss'

function RootApp () {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/test" exact>
            <Test />
          </Route>
          <Route path="/app">
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<RootApp />, document.getElementById('root'))
