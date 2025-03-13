import { useState } from 'react';
import '../styles/Events.css';

// Sample initial events data
const initialEvents = [
  {
    id: 1,
    title: 'Interfaith Prayer Meeting',
    date: '2023-06-15',
    location: 'Community Center',
    description: 'A gathering for people of all faiths to pray together and share traditions.',
    category: 'Religious'
  },
  {
    id: 2,
    title: 'Charity Food Drive',
    date: '2023-06-20',
    location: 'City Park',
    description: 'Help collect food donations for local families in need.',
    category: 'Charity'
  },
  {
    id: 3,
    title: 'Community Picnic',
    date: '2023-06-25',
    location: 'Riverside Park',
    description: 'A social gathering for community members to connect and enjoy food together.',
    category: 'Social'
  }
];

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [filter, setFilter] = useState('All');
  
  // Form state
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    category: 'Social'
  });

  // Handler for filter change
  const handleFilterChange = (category) => {
    setFilter(category);
    if (category === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === category));
    }
  };

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const eventToAdd = {
      ...newEvent,
      id: events.length + 1
    };
    
    setEvents(prev => [...prev, eventToAdd]);
    
    // If the current filter matches the new event's category or is 'All', add to filtered events
    if (filter === 'All' || filter === eventToAdd.category) {
      setFilteredEvents(prev => [...prev, eventToAdd]);
    }
    
    // Reset form
    setNewEvent({
      title: '',
      date: '',
      location: '',
      description: '',
      category: 'Social'
    });
  };

  return (
    <div className="events-container">
      <h1>Community Events</h1>
      
      <div className="events-filter">
        <h3>Filter by Category:</h3>
        <div className="filter-buttons">
          <button 
            className={filter === 'All' ? 'active' : ''} 
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
          <button 
            className={filter === 'Religious' ? 'active' : ''} 
            onClick={() => handleFilterChange('Religious')}
          >
            Religious
          </button>
          <button 
            className={filter === 'Social' ? 'active' : ''} 
            onClick={() => handleFilterChange('Social')}
          >
            Social
          </button>
          <button 
            className={filter === 'Charity' ? 'active' : ''} 
            onClick={() => handleFilterChange('Charity')}
          >
            Charity
          </button>
        </div>
      </div>
      
      <div className="events-list">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <div className="event-date">
              <strong>Date:</strong> 
              <span>{event.date}</span>
            </div>
            <div className="event-location">
              <strong>Location:</strong> 
              <span>{event.location}</span>
            </div>
            <p className="event-description">{event.description}</p>
            <span className="event-category">{event.category}</span>
          </div>
        ))}
      </div>
      
      <div className="add-event-section">
        <h2>Add New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Event Title:</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              value={newEvent.title} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={newEvent.date} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input 
              type="text" 
              id="location" 
              name="location" 
              value={newEvent.location} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea 
              id="description" 
              name="description" 
              value={newEvent.description} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select 
              id="category" 
              name="category" 
              value={newEvent.category} 
              onChange={handleInputChange}
            >
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>
          
          <button type="submit" className="submit-button">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default Events; 