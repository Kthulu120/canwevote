import { h, Component } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';
import {STATES, VOTING_LAWS_DECISION_TREE} from './../../static/js/constants'
import linkState from 'linkstate';

export default class Main extends Component {
	contstructor(props){
		this.setState({
			'state': 'Alaska',
			'felony_conviction': false,
			'on_parole': false,
			'on_probation': false,
			'can_vote': 'Possibly'
		})
		this.state = {
			'us_state': 'Alaska',
			'felony_conviction': false,
			'on_parole': false,
			'on_probation': false,
			'can_vote': 'Possibly'
		}
	}

	canIVote(state){
		const {us_state, felony_conviction, on_parole, on_probation,
		can_vote} = this.state
		const in_prison = false
		if (!us_state) return 'More Info Needed'
		if (!felony_conviction) return 'More Info Needed'
		if (!on_parole) return 'More Info Needed'
		if (!on_probation) return 'More Info Needed'
		const cur_state = VOTING_LAWS_DECISION_TREE['states'][us_state]
		let reply = {
			notes: [],
			can_vote: ''
		}
		Object.keys(cur_state).forEach((e, index) => {
			const key = Object.keys(cur_state)[index]
			console.log(key)
			const value = cur_state[key]
			console.log(value)
			if(key === 'prison' && value) reply = {notes: cur_state['notes'], can_vote:'Yes'}
			if(key === 'after prison' && value) reply =  {notes: cur_state['notes'], can_vote:'Yes'}
			if (key === 'after prison and parole' && value && on_parole==='Yes') reply = {notes: cur_state['notes'], can_vote:'No'}
			else reply =  {notes: cur_state['notes'], can_vote:'Yes'}
			if(key === 'after 3 ps' && !in_prison && value && !on_parole && !on_probation) reply = {notes: cur_state['notes'] ,can_vote:'Yes'}
			else {
				if(key === 'after 3 ps' && value) reply = {notes: cur_state['notes'] ,can_vote:'No'}
			}
			if(key === 'perm'){
				reply = {notes: cur_state['notes'] ,can_vote:'Possibly Check Notes'}
			}
	})
	console.log(reply)
	return reply
	}

	render (props, state){
		return (
		<div className="page page__home">
		<Card>
		<h4>What state are you voting in?:</h4>
			<select onChange={(e) => this.setState({'us_state': e.target.value})}>
			<option default> Select Option </option>
				{STATES.map(ele => <option value={ele}> {ele} </option>)}
			</select>
		</Card>

			<Card>
			<h4>Have you ever been Convicted of a Felony:</h4>
				<select onChange={(e) => this.setState({'felony_conviction': e.target.value})}>
				<option default> Select Option </option>
					<option> Yes </option>
					<option> No </option>
				</select>
			</Card>

			<Card>
				<h4>Are you on Parole?:</h4>
					<select onChange={(e) => this.setState({'on_parole': e.target.value})}>
					<option default> Select Option </option>
						<option> Yes </option>
						<option> No </option>
					</select>
			</Card>

			<Card>
				<h4>Are you on Probation (<a href="https://www.nolo.com/legal-encyclopedia/question-difference-between-probation-parole-28221.html">Not Sure?</a>):</h4>
					<select onChange={(e) => this.setState({'on_probation': e.target.value})}>
					<option default> Select Option </option>
						<option> Yes </option>
						<option> No </option>
					</select>
			</Card>

			<div style="background-color: #c84630 !important">
				<Card>
				  <h4>So can I vote?</h4>
					<h2>{this.canIVote(state.can_vote).can_vote}</h2>
				</Card>
		  </div>

			<Card>
				<h4>Notes</h4>
					<div style="padding: 15px;"/>

					<h5>Important Documents</h5>
					{(this.canIVote(state.can_vote).notes || []).map(ele => {
						let link = <a href={ele.l}>{ele.t}</a>
						if(!ele.l) link = <p>{ele.t}</p>
						return (
							<div style="margin: 5px 0">
							<a href={ele.l}>{ele.t}</a>
							</div>
						)
					})}

			</Card>


		<Card>
				<h5>External Sources</h5>
				<ul>
					{Object.keys(VOTING_LAWS_DECISION_TREE.sources).map((ele) => {
						console.log(ele)
						return(
							<li>
								<a href={VOTING_LAWS_DECISION_TREE.sources[ele]}>
								{ele}
								</a>
							</li>
						)
					})}
				</ul>
		</Card>

			<p style="size: 9px;">Disclaimer: This application is not legal advice nor does it anyone bear the responsibilities of any harm that
			may come from attempting to vote, if you are truly not sure call a lawyer and simply ask, often
			this advice is free of charge and typically always correct.</p>
		</div>
	);
	}
}
