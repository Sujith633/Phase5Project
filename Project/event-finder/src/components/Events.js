import React from 'react'
import { eventData } from './data';

export const Events = () => {
  return (
    <>
      <HomePageHeader />
      <div className="event-container">
        {eventData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                EventName={data.EventName}
                Discription={data.Discription}
                Date={data.Date}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  const myStyle = {
    color: "purple",
    // backgroundColor: "#e83e8c",
    padding: "08px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
    <header className="header">
      <h2>Your Upcoming Events</h2>
    </header>
    <table>
    <tbody>
    <tr>
      <td><h4 style={myStyle}>EventName</h4></td>
      <td><h4 style={myStyle}>Discription</h4></td>
      <td><h4 style={myStyle}>Date</h4></td>
    </tr>
    </tbody>
  </table>
    </>
  );
};

const Stock = ({ EventName, Discription, Date }) => {
  
  if (!EventName) return <div />;
  return (
    <table className='table table-success table-striped'>
      {/* <tbody>
      <tr>
        <th><h3>EventName</h3></th>
        <th>Discription</th>
        <th>Date</th>
      </tr>
      </tbody> */}
      <tbody>
        <tr>
          <td>
            <h5>{EventName}</h5>
          </td>
          <td>
            <h5>{Discription}</h5>
          </td>
          <td>
            <h4>{Date}</h4>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Events
