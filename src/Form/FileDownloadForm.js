import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';
import axios from 'axios'
import './FileDownloadForm.css';

const FileDownloadForm = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [target, setTarget] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    let api = 'http://127.0.0.1:8000/api/files'

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.size > 10 * 1024 * 1024) {
            setError('File size exceeds 10MB.');
            setFile(null);
        } else {
            setError('');
            setFile(selectedFile);
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (event) => {
           event.preventDefault();
            if (file && 
                ((selectedOption === "Classification" || selectedOption === "Regression") && target !== '') || 
                (selectedOption === "Clustering")) {
                console.log(selectedOption);
                const formData = new FormData();
                formData.append('file', file);
                formData.append('selectedOption', selectedOption);
                formData.append('target', target);
    
                try {
                    const response = await axios.post('http://127.0.0.1:8000/api/files/', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    console.log(response.data);
                    setMessage('File uploaded successfully.');
                } catch (error) {
                    console.error('Error uploading file:', error);
                    setMessage('Error uploading file.');
                }
            } else {
                setError('Please select a file and provide all required information.');
            }
        };

    return (
        <div className="centered-form">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <Grid>
                        <Grid item xs={4}>
                            <Typography variant="h4" sx={{textAlign:'center',marginBottom:'45px'}}>
                                Let's Model Up Together
                            </Typography>
                        </Grid>
                        <Grid>
                        <Typography variant="h6" sx={{textAlign:'left',marginBottom:'10px'}}>
                                Choose file :
                            </Typography>
                            <FormControl component="fieldset">
                                <FormGroup>
                                <Grid container justifyContent="center">
                                    <input
                                        accept=".csv ,.xlsx"
                                        style={{ display: 'none' }}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                   
                                    <label htmlFor="contained-button-file">
                                    <Button variant="contained" component="span" sx={{ backgroundColor: '#008080', color: 'white', borderRadius: '10px' ,height:'45px',width:'180px',marginBottom:'-10px'}}>
                                            Select File
                                        </Button>
                                        {file && (
                                        <Typography variant="body1" gutterBottom style={{marginBottom:'-10px', color: '#008080' }}>
                                                          <br></br> Selected File : {file.name}
                                        </Typography>
                                    )}
                                        {error && (
                                <Typography variant="body1" gutterBottom style={{marginBottom:'-8px',marginTop:'10px', color: 'red' }}>
                                    {error}
                                </Typography>
                                    )}
                                    </label>
                                    </Grid>
                                </FormGroup>
                                
                            </FormControl>
                        </Grid>
                        <Grid>
                        <Typography variant="h6" sx={{textAlign:'left',marginBottom:'8px',marginTop:'15px'}}>
                                Choose the type of modeling  :
                            </Typography>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="options"
                                    name="options"
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                >
                                    <FormControlLabel
                                        value="Classification"
                                        control={<Radio />}
                                        label="Classification"
                                    />
                                    <FormControlLabel
                                        value="Regression"
                                        control={<Radio />}
                                        label="Regression"
                                    />
                                    <FormControlLabel
                                        value="Clustering"
                                        control={<Radio />}
                                        label="Clustering"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {(selectedOption === 'Classification' || selectedOption === 'Regression') && (
                            <Grid >
                                <TextField
                                    fullWidth
                                    required
                                    id="target"
                                    label="Target Name"
                                    value={target}
                                    onChange={(e) => setTarget(e.target.value)}
                                    variant="outlined"
                                />
                            </Grid>
                        )}
                        <Grid item xs={12} container justifyContent="center">
                            <Button 
                                type="submit"
                                variant="contained"
                                sx={{justifyContent:'center' ,backgroundColor: '#008080 ', color: 'white', borderRadius: '20px',marginTop:'20px'}}
                            >
                                Generate
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
};

export default FileDownloadForm;





