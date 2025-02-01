import {  Container , Grid, Typography, Box, Paper, Button, TextField, Autocomplete, CircularProgress } from "@mui/material";


export function SearchP(){

    const originOptions = ['a', 'b', 'c'];

    return(
        <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{ marginBottom: '20px', padding: '20px' }}
        >
            <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                    options={originOptions}
                    // getOptionLabel={(option) => option.label}
                    // onInputChange={handleOriginInputChange}
                    // onChange={(event, value) => setOrigin(value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Origin"
                            variant="outlined"
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                    options={originOptions}
                    // getOptionLabel={(option) => option.label}
                    // onInputChange={handleDestinationInputChange}
                    // onChange={(event, value) => setDestination(value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Destination"
                            variant="outlined"
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
                <TextField
                    type="date"
                    variant="outlined"
                    fullWidth
                    // value={date}
                    // onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleSubmit}
                    // disabled={!origin || !destination || !date || loading}
                >
                    {/* {loading ? (
                        <CircularProgress size={24} color="inherit" />
                    ) : (
                        'Search'
                    )} */}
                    Explore
                </Button>
            </Grid>
        </Grid>
    );
}