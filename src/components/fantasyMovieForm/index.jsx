import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import genres from "./genreCategories";


const FantasyMovieForm = () => {
  const defaultValues = {
    title: "",
    genre: "Action",
    releasedate: "",
    runtime: "",
    productionCompany: "",
    overview: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);
  
  const context = useContext(MoviesContext);
  const [genreCat, setGenreCat] = useState("0");
  const [open, setOpen] = useState(false);

  const handleGenreCatChange = (event) => {
    setGenreCat(event.target.value);
};

  const handleSnackClose = (event) => {
    setOpen(false);
    navigate("/");
  };

  const onSubmit = (fantasy) => {
    context.addFantasyMovie(fantasy);
    fantasy.title = title;
    fantasy.genre = genres;
    fantasy.releasedate = releasedate;
    fantasy.runtime = runtime;
    fantasy.productionCompany = productionCompany;
    fantasy.overview = overview
    genreContent(title, genres, overview)
    setOpen(true);
  };

  const navigate = useNavigate();

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Enter Your Movie Critera
      </Typography>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">
            Thank you for creating your Fantasy Movie.
          </Typography>
        </Alert>
      </Snackbar>
      <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="title"
              label="Movie Title"
              autoFocus
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.title.message}
          </Typography>
        )}
        <Controller
          name="genre"
          control={control}
          rules={{ required: "Genre is required" }}
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              id="genre"
              select
              variant="outlined"
              label="Genre"
              value={genreCat}
              margin="normal"
              required
              onChange={handleGenreCatChange}
              helperText="Select your Genre"
              autoFocus
            >
              {genres.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        {errors.genre && (
          <Typography variant="h6" component="p">
            {errors.genre.message}
          </Typography>
        )}
        <Controller
          name="releaseDate"
          control={control}
          rules={{ required: "Release Date is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="releaseDate"
              label="Release Date"
              autoFocus
            />
          )}
        />
        {errors.releaseDate && (
          <Typography variant="h6" component="p">
            {errors.releaseDate.message}
          </Typography>
        )}
        <Controller
          name="runtime"
          control={control}
          rules={{ required: "Runtime is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="runtime"
              label="Runtime"
              autoFocus
            />
          )}
        />
        {errors.runtime && (
          <Typography variant="h6" component="p">
            {errors.runtime.message}
          </Typography>
        )}
        <Controller
          name="productionCompany"
          control={control}
          rules={{ required: "Production Company is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "80ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="productionCompany"
              label="Production Company"
              autoFocus
            />
          )}
        />
        {errors.productionCompany && (
          <Typography variant="h6" component="p">
            {errors.productionCompany.message}
          </Typography>
        )}
        <Controller
          name="overview"
          control={control}
          rules={{
            required: "Overview cannot be empty.",
            minLength: { value: 10, message: "Review is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={value}
              onChange={onChange}
              label="Overview text"
              id="overview"
              multiline
              minRows={10}
            />
          )}
        />
        {errors.overview && (
          <Typography variant="h6" component="p">
            {errors.overview.message}
          </Typography>
        )}

        <Box sx={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                author: "",
                content: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FantasyMovieForm;