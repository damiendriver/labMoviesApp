
# Full Stack Development 2 - Assignment.

__Name:__ [Damien Driver]

## Features.

+ TV Shows
+ TV Show Details 
+ Actors
+ Actor Detail
+ Upcoming Movies
+ Cast added to Movie Detail
+ Hyperlink from Cast to Actor Card 
+ Create Fantasy Movie Form
+ Pagination on Movies 
+ Protected route Favourite Movies
+ Authentication via Supabase
+ Deployment via Vercel


## Feature Design.


#### TV Shows.

> Lists TV Shows from the TV Shows endpoint of TMDB.

![][tvShowList]

#### TV Show Details.

> Displays overview of TV Show from TV Details endpoint of TMDB.

![][tvShowDetails]

> Click the 'Full Review' link of a review extract to see the review's full text. 

![][image3]

.... other features .......

## Storybook.

[Include a screenshot(s) from the Storybook UI and highlight the stories for new components developed.]

e.g.

![][image5]

## Authentication. (if relevant)

#### Protected routes 

[List all the routes in your app and highlight those that are protected/private (require authentication).]

e.g.

+ /movies - List of 20  movies from the Discover endpoint,
+ /movies/{movie_id} - Detailed information on a specific movie.
+ /reviews/{review_id} (Protected) - The full text of a movie review.
+ /movie/{movie_id}/similar - A list of similar movies. 
+ /person/{person_id} (Protected) - A specific actor's bio.
+ etc
+ etc

#### Protected functionality. (if relevant)

[ Briefly state any app functionality that requires authentication, e.g. only authenticated users can tag a movie as a 'favourite'.]

#### Supabase (if relevant)

[Include a screenshot(s) from your Supabase account that verifies its use for this app. ]

## Deployment (if relevant).

[Specify the URL of your deployed app and include a screenshot(s) from your deployment platform account (e.g. Vercal) that verifies its use for this app. Set up a registered user for your app and specify their credentials.

Username: test1 ; Password: pass1
]

## Persistence (if relevant).

[If you are persisting data to the Supabase backend (e.g. favourite movies, fantasy movie), include screenshots with appropriate captions to verify this aspect. ]

## Additional Information.

[ Briefly explain any other aspects of your app's design or implementation that is non-standard and worthy of mention.]

[tvShowList]: ./images/tvShowList.png
[tvShowDetails]: ./images/tvShowDetails.png
[image3]: ./images/image3.png
[image4]: ./images/image4.png
[image5]: ./images/image5.png