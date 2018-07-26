import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';
import {STATES} from './../../static/js/constants'

export default function (props) {
	return (
		<div className="page page__home">
		<Card>
		<h4>What state are you voting in?:</h4>
			<select>
				{STATES.map(ele => <option value={ele}> {ele} </option>)}
			</select>
		</Card>

			<Card>
			<h4>Have you ever been Convicted of a Felony:</h4>
				<select>
					<option> Yes </option>
					<option> No </option>
				</select>
			</Card>

			<Card>
				<h4>Are you on Parole?:</h4>
					<select>
						<option> Yes </option>
						<option> No </option>
					</select>
			</Card>

			<Card>
				<h4>Are you on Probation (<a href="https://www.nolo.com/legal-encyclopedia/question-difference-between-probation-parole-28221.html">Not Sure?</a>):</h4>
					<select>
						<option> Yes </option>
						<option> No </option>
					</select>
			</Card>

			<div style="background-color: #c84630 !important">
				<Card>
				  <h4>So can I vote?</h4>
					<h2>No</h2>
				</Card>
		  </div>

			<Card>
				<h4>Notes</h4>
					Some people convicted of a felony may apply to have their vote restored immediately upon completion of their full sentence. Those convicted of certain felony offenses such as murder, rape, incest, sexual crime against children, and treason are not eligible for re-enfranchisement.
					<div style="padding: 15px;"/>

					<h5>Important Documents</h5>
					<ul>
						<li><a href="https://felonvoting.procon.org/sourcefiles/alabama-rights-restoration-2017.pdf">Instructions for Voting Restoration</a></li>
					</ul>

			</Card>
			<p style="size: 9px;">Disclaimer: This application is not legal advice nor does it anyone bear the responsibilities of any harm that
			may come from attempting to vote, if you are truly not sure call a lawyer and simply ask, often
			this advice is free of charge and typically always correct.</p>
		</div>
	);
}
