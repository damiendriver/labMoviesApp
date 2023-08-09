
# Full Stack Development 2 - Assignment.

__Name:__ [Damien Driver]

## Features.

+ TV Shows
+ TV Show Details 
+ Actors
+ Actor Detail
+ Upcoming Movies
+ Popular Irish Movies
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

![TV Show List](src/images/tvShowList.png)

#### TV Show Details.

> Displays overview of TV Show from TV Details endpoint of TMDB.

![TV Show Details](src/images/tvShowDetails.png)

#### Actors List.

> Displays list of Actors from People endpoint of TMDB.

![Actors List](src/images/actorsList.png)

#### Actor Details.

> Displays overview of Actor from People endpoint of TMDB.

![Actor Details](src/images/actorsDetails.png)

#### UpComing Movie.

> Displays list from Upcoming Movies endpoint of TMDB.

![upComing Movies](src/images/upComingMovies.png)

#### Popular Irish Movies.

> Displays list of Irish Movies from popular endpoint of TMDB.

![Popular Irish](src/images/popularIrish.png)

#### Cast on Movie Card.

> Displays overview of Movie with 10 Cast Members with hyperlink back to Actors card. 

![Cast Movie](src/images/castAdded.png)

#### Fantasy Movie Form.

> Form where user can create fantasy movie details (title, genre, release date, production company, overview)

![Fantasy Form](src/images/fantasyForm.png)

#### Pagination.

> Pagination added to Movie List Pages

![Pagination](src/images/pagination.png)



## Storybook.

> Storybook Overview with new stories.

![Storybook](src/images/storybook.png)

#### Storybook Actor Card.

![Storybook Actor Card](src/images/storybook-actorCard.png)

#### Storybook Actor Detail.

![Storybook Actor Detail](src/images/storybook-actorDetail.png)

#### Storybook Movie Detail.

![Storybook Movie Detail](src/images/storybook-movieDetail.png)

#### Storybook TV Show List.

![Storybook TV Show](src/images/storybook-tvShowList.png)



## Authentication.

Authentication added using supabase, user must login in order to access some features such as Favourite Movies and Fantasy Movie.

#### SignUp with Supabase.

![SignUp](src/images/signUpPage.png)

#### Login with Supabase.

![Login](src/images/loginPage.png)

> Unprotected Pages available to all

+   / - HomePage
+   /movies/upcoming - UpcomingMoviesPage
+   /movies/:id - MoviePage
+   /reviews/:id - MovieReviewPage
+   /reviews/form - AddMovieReviewPage
+   /movies/popular - PopularMoviesPage
+   /tvShows - TVShowsPage
+   /tvShows/:id - TVShowDetailsPage
+   /actors - ActorsPage
+   /actors/:id - ActorDetailsPage
+   /login - LoginPage
+   /signup - SignupPage

> Protected Pages must be logged in to view

+   /movies/favourites - FavouriteMoviesPage
+   /movies/fantasy - AddFantasyMoviePage

+   more info button on movie list pages is hidden until login.   


#### Supabase.

> Supabase Dashboard

![Supabase Dashboard](src/images/supabase-dashboard.png)

> Supabase Auth Users

![Supabase Auth Users](src/images/supabase-auth.png)


## Deployment.

> Deployed to Vercel.
+ https://lab-movies-app-bbcp.vercel.app/

![Vercel](src/images/vercel.png)


## Additional Information /  Known Issues.

+   All Pages made public as private/protected not showing when logged in.
+   After Login the siteheader is not updating to show the Logout option.
+   Fantasy Movie can be created but page was not built to display details.
+   Storybook - movieheader page is returning context error.