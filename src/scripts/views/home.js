import React from 'react'
import Acronyms from '../acronyms'

const Home = React.createClass({

	getInitialState: function(){
	return {
		showingId: 1,
		showAnswer: false
	}
},

	_changeId: function(id){
		this.setState({
			showingId: id
		})
	},

	_showAnswer: function(boolean){
		this.setState({
			showAnswer: boolean
		})
	},

	render: function(){
		return (
				<div>
					<AcronymCol showingId={this.state.showingId} showAnswer={this.state.showAnswer}/>
					<NavButtons changeId={this._changeId} showingId={this.state.showingId} showAnswer={this._showAnswer}/>
				</div>
			)
	}
})

const AcronymCol = React.createClass({

	_getAcronyms: function() {
		return Acronyms.map((acronym)=>{
			return <Acronym 
						key={acronym.id} 
						id={acronym.id} 
						abbr={acronym.abbreviation} 
						desc={acronym.description} 
						showAnswer={this.props.showAnswer}/>
		})
	},

	_showAcronymById: function() {
		return this._getAcronyms().find((acronym)=>{
			return acronym.props.id === this.props.showingId
		})
	},

	render: function(){
		return (
				<div className="acronym-col">
					{this._showAcronymById()}
				</div>
			)
	}
})

const Acronym = React.createClass({

	render: function() {
		let descClass = this.props.showAnswer ? "desc show" : "desc hide"
		return (
				<div className="acronym">
					<h2 className="abbr">{this.props.abbr}</h2>
					<h3 className={descClass}>{this.props.desc}</h3>
				</div>
			)
	}
})

const NavButtons = React.createClass({
	_showNext: function(){
		let newId = this.props.showingId + 1
		this.props.changeId(newId)
		this.props.showAnswer(false)
	},

	_showPrev: function(){
		if (this.props.showingId > 1){
			let newId = this.props.showingId - 1
			this.props.changeId(newId)
			this.props.showAnswer(false)
		}
	},

	_showAnswer: function(){
		this.props.showAnswer(true)
	},

	render: function(){
		return (
				<div className="nav">
					<button onClick={this._showPrev} className="button"> Previous </button>
					<button onClick={this._showAnswer} className="button"> Show Answer </button>
					<button onClick={this._showNext} className="button"> Next </button>
				</div>
			)
	}

})

export default Home