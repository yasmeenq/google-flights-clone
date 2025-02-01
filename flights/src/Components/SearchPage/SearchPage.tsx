import css from "./SearchPage.module.css";
import { useEffect, useState } from "react";
import { Autocomplete, Button, CircularProgress, Grid, TextField } from "@mui/material";
import { airportService } from "../../Services/AirportService";
import toast from "react-hot-toast";
import { Airport } from "../../interface/airportInterface";

export function SearchPage({ onSearch, loading }): JSX.Element {

    const [allAirports, setAllAirports] = useState<Airport[]>([]);  
    const [load, setLoad] = useState(false);  

    // Origin State
    const [origin, setOrigin] = useState<Airport | null>(null);
    const [originOptions, setOriginOptions] = useState<Airport[]>([]); 

    // Destination State
    const [destination, setDestination] = useState<Airport | null>(null);
    const [destinationOptions, setDestinationOptions] = useState<Airport[]>([]);

    // Date State
    const [date, setDate] = useState('');

    // Fetch all airports when the page loads
    useEffect(() => {
        const fetchAirports = async () => {
            setLoad(true);
            try {
                const airports = await airportService.searchAirports("a");
                const formattedAirports = airports.map((airport: any) => ({
                    label: airport.airportName || `Airport Not Found (${airport.entityId})`, 
                    key: airport.entityId,
                }));
                setAllAirports(formattedAirports);
            } catch (error) {
                console.error("Error fetching airports:", error);
                toast.error("Failed to load airports.");
            }
            setLoad(false);
        };
        fetchAirports();
    }, []);

    //handle origin
    const handleOriginFocus = () => {
        setOriginOptions(allAirports);
    };

    const handleOriginInputChange = async (_: React.SyntheticEvent, value: string) => {
        if (value.length >= 3) {
            const airports = await airportService.searchAirports(value);
            setOriginOptions(airports.map((airport: any) => ({
                label: airport.airportName || `Airport Not Found (${airport.entityId})`, 
                key: airport.entityId,
            })));
        } else {
            setOriginOptions(allAirports);
        }
    };

    //handle destination
    const handleDestinationFocus = () => {
        setDestinationOptions(allAirports);
    };
    
    const handleDestinationInputChange = async (_: React.SyntheticEvent, value: string) => {
        if (value.length >= 3) {
            const airports = await airportService.searchAirports(value);
            setDestinationOptions(airports.map((airport: any) => ({
                label: airport.airportName || `Airport Not Found (${airport.entityId})`, 
                key: airport.entityId,
            })));
        } else {
            setDestinationOptions(allAirports);
        }
    };


    //handle submit button
    const handleSubmit = () => {
        if (origin && destination && date) {
            onSearch(origin.value, destination.value, date);
        }
    };


    return (
        <div className={css.SearchPage}>

            <div className={css.searchHeader}>
                <div className={css.headerImageContainer}>
                    <img
                        src="src/assets/main.png"
                        alt="Travel illustration"
                        className={css.headerImage}
                    />
                </div>
                <h1 className={css.title}>Flights</h1>
            </div>


            <div className={css.searchBox}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    style={{ marginBottom: '20px', padding: '20px' }}
                >
                    
                    {/* Origin Input */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Autocomplete
                            options={originOptions}
                            onInputChange={handleOriginInputChange}
                            onChange={(event, value) => setOrigin(value as Airport | null)}
                            onOpen={handleOriginFocus}
                            loading={load}
                            renderOption={(props, option) => (
                                <li {...props} key={option.entityId}> {/* Use entityId as the key */}
                                    {option.label}
                                </li>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Origin"
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <>
                                                {load ? <CircularProgress color="inherit" size={20} /> : null}
                                                {params.InputProps.endAdornment}
                                            </>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>

                    {/* Destination Input */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Autocomplete
                            options={destinationOptions}
                            onInputChange={handleDestinationInputChange}
                            onChange={(event, value) => setDestination(value as Airport | null)}
                            onOpen={handleDestinationFocus}
                            loading={load}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Destination"
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <>
                                                {load ? <CircularProgress color="inherit" size={20} /> : null}
                                                {params.InputProps.endAdornment}
                                            </>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>

                    {/* date input */}
                    <Grid item xs={12} sm={8} md={4}>
                        <TextField
                            type="date"
                            variant="outlined"
                            fullWidth
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Grid>

                    {/* submit button */}
                    <Grid item xs={12} sm={4} md={2}>
                        <Button
                            variant="contained"
                            color="primary"
                        onClick={handleSubmit}
                        disabled={!origin || !destination || !date || loading}
                        >
                            {loading ? (
                        <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Search'
                        )}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
