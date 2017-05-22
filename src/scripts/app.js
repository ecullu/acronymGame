import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import Home from './views/home'


const app = function() {
	var QuizRouter = Backbone.Router.extend({
		routes: {
			"home": "_goHome",
			"questions/:questionNumber": "_showQuestions",
			"*default": "_redirectHome",
		},

		_goHome: function(){
			ReactDOM.render(<Home/>, document.querySelector('.container'))
		},

		_showQuestions: function(){
			ReactDOM.render(<Questions/>, document.querySelector('.container'))
		},

		_redirectHome: function(){
			location.hash = 'home'
		},

		initialize: function(){
			Backbone.history.start()
		}	
	})

	new QuizRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..