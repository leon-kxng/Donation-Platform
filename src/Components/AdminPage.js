import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Table, Dropdown, Form, Carousel, Spinner, Pagination } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from 'chart.js/auto';
import '../css/AdminPage.css'; // Custom CSS for color customization

const AdminPage = ({ charities, setCharities }) => {
    const chartRef = React.useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const { charityId } = useParams(); // Get the charityId from the URL
    const [selectedCharity, setSelectedCharity] = useState(null);

    // Get current charities
    const [currentPage, setCurrentPage] = useState(1);
    const [charitiesPerPage] = useState(5); // Number of charities per page
    const indexOfLastCharity = currentPage * charitiesPerPage;
    const indexOfFirstCharity = indexOfLastCharity - charitiesPerPage;
    const currentCharities = charities.slice(indexOfFirstCharity, indexOfLastCharity);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = (columnName) => {
        const direction = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(direction);

        const sortedCharities = charities.sort((a, b) => {
            if (a[columnName] < b[columnName]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[columnName] > b[columnName]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setCharities([...sortedCharities]);
    };

    const filteredCharities = charities.filter(charity =>
        charity.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sample data for revenue chart
    const revenueChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Revenue',
                backgroundColor: 'rgba(255, 184, 64, 0.5)',
                borderColor: '#FFB840',
                borderWidth: 1,
                data: [1000, 1500, 2000, 1800, 2200, 2500, 2300],
            },
        ],
    };

    // Function to create revenue chart
    const createChart = (chartType) => {
        const ctx = document.getElementById('revenueChart').getContext('2d');

        // Check if a chart instance exists and destroy it
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        let chartConfig = {
            type: chartType,
            data: revenueChartData,
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        };

        // Create new chart instance
        chartRef.current = new Chart(ctx, chartConfig);
    };

    // Initial chart type is bar
    const [chartType, setChartType] = useState('bar');

    React.useEffect(() => {
        createChart(chartType);
    }, [chartType]);

    // Split charities into chunks of 5
    const chunkSize = 5;
    const chunkedCharities = charities.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

        // Function to update status of a charity
        const updateCharityStatus = async (charityId, action) => {
            try {
                await axios.post(`/charities/${charityId}`, { action });
                // If action is delete, remove the charity from the state
                if (action === 'delete') {
                    await axios.delete(`/charities/${charityId}`);
                    // If action is delete, remove the charity from the state
                    setCharities(prevCharities => prevCharities.filter(charity => charity.charity_id !== charityId));
                } else {
                    // Otherwise, fetch the updated list of charities and update the state
                    const response = await axios.get('/charities');
                    setCharities(response.data);
                }
            } catch (error) {
                console.error('Error updating charity status:', error);
            }
        };
    
        const handleAccept = (charityId) => {
            updateCharityStatus(charityId, 'accept');
        };
        
        const handleReject = (charityId) => {
            updateCharityStatus(charityId, 'reject');
        };
        
        const handleDelete = (charityId) => {
            updateCharityStatus(charityId, 'delete');
        };
    
        const handleActionClick = (charityId) => {
            setSelectedCharity(charities.find(charity => charity.charity_id === charityId));
            // Remove the selected charity from the carousel
            setCharities(prevCharities => prevCharities.filter(charity => charity.charity_id !== charityId));
        };

    return (
        <Container fluid className="admin-page-container">
            <Row>
                {/* Top display */}
                <Col md={12}>
                    <Card className="card-top-display">
                        <Card.Body>
                            <div className="top-display">
                                <div style={{ display: 'inline-block', marginRight: '20px' }}>
                                    <h4>Today's Revenue</h4>
                                    <p>$1000</p>
                                </div>
                                <div style={{ display: 'inline-block', marginRight: '20px' }}>
                                    <h4>Total Revenue</h4>
                                    <p>$5000</p>
                                </div>
                                <div style={{ display: 'inline-block', marginRight: '20px' }}>
                                    <h4>Total Users</h4>
                                    <p>100</p>
                                </div>
                                <div style={{ display: 'inline-block' }}>
                                    <h4>Number of Subscribers</h4>
                                    <p>50</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                {/* Revenue chart */}
                <Col md={12}>
                    <div className="chart-container">
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-chart">
                                Chart Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setChartType('bar')}>Bar Chart</Dropdown.Item>
                                <Dropdown.Item onClick={() => setChartType('pie')}>Pie Chart</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <canvas id="revenueChart" />
                    </div>
                </Col>
            </Row>
            <Row>
                {/* Charity applications */}
                <Col md={12} className="admin-carousel">
                    {charities.length === 0 ? (
                        <div className="text-center">
                            <Spinner animation="border" role="status">
                                {/* <span className="sr-only">Loading...</span> */}
                            </Spinner>
                        </div>
                    ) : (
                        <Carousel activeIndex={activeIndex} onSelect={handleSelect} indicators={true} interval={null} className="carousel-item-wrapper">
                            {chunkedCharities.map((chunk, index) => (
                                <Carousel.Item key={index}>
                                    <div>
                                        {chunk.map(charity => (
                                            <Card key={charity.id} className="charity-card-vertical">
                                                <Card.Body className="admin-charity-card">
                                                    <Card.Title>{charity.name}</Card.Title>
                                                    <Card.Text>
                                                        Category: {charity.category}<br />
                                                        Country: {charity.country}
                                                    </Card.Text>
                                                    <Button variant="success" onClick={() => { handleAccept(charity.charity_id); handleActionClick(charity.charity_id); }}>Accept</Button>{' '}
                                                    <Button variant="warning" onClick={() => { handleReject(charity.charity_id); handleActionClick(charity.charity_id); }}>Reject</Button>{' '}
                                                    <Button variant="danger" onClick={() => { handleDelete(charity.charity_id); handleActionClick(charity.charity_id); }}>Delete</Button>{' '}
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}
                </Col>
                {/* Top charities */}
                <Col md={6}>
                    <h2>Top Charities</h2>
                    <Card className="charity-card">
                        <Card.Body>
                            <Card.Title>Charity Name</Card.Title>
                            <Card.Text>
                                Total Money: $1000
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Charity Table</h2>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Search by charity name"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Form.Group>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>CharityID</th>
                                <th onClick={() => handleSort('name')}>Charity Name</th>
                                <th>Category</th>
                                <th>Country</th>
                                <th onClick={() => handleSort('status')}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCharities.map(charity=> (
                                <tr key={charity.charity_id}>
                                    <td>{charity.charity_id}</td>
                                    <td>{charity.name}</td>
                                    <td>{charity.category}</td>
                                    <td>{charity.country}</td>
                                    <td>{charity.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination>
                        {Array.from({ length: Math.ceil(charities.length / charitiesPerPage) }).map((_, index) => (
                            <Pagination.Item key={index + 1} onClick={() => paginate(index + 1)} active={index + 1 === currentPage}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPage;
