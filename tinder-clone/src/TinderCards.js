import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";


function TinderCards() {
	const [people, setPeople] = useState([
		{
			name: "TouliVinh Van",
			url:
				"https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.15752-9/50927236_373910016521628_2596934641038393344_n.png?_nc_cat=105&ccb=3&_nc_sid=ae9488&_nc_ohc=ZyiT0JkhnAcAX_imC7B&_nc_ht=scontent.fsgn4-1.fna&oh=7dc736e2e76374bd7e4ff9d18589d1b0&oe=604A4141",
		},
		{
			name: "Alexandra Daddario",
			url:
				"data:image/jpeg;base64,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",
		},
		{
			name: "Bao Nguyen",
			url:
				"https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/138407046_3608479095935664_9089130642984661177_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8bfeb9&_nc_ohc=A7oIbFzP6V4AX_plnv_&_nc_ht=scontent.fsgn8-1.fna&oh=e19ec8cedf597f51c0b425989dd1a2cf&oe=604BB48C",
		},
	]);

	const swiped = (direction, nameToDelete) => {
		console.log("removing " + nameToDelete);
	};

	const outOfFrame = (name) => {
		console.log(name + " Left the screen");
	};

	return (
		<div className="tinderCards">
			<div class="tinderCards__cardContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
            <div 
            style={{ backgroundImage: `url(${person.url})` }}
            className="card">
              <h3>{person.name}</h3>
            </div>

          </TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
