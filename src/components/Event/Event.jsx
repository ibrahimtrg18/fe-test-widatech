import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import "./Event.css";

import { ReactComponent as EventIcon } from "../../assets/icons/event.svg";
import { ReactComponent as SupervisorIcon } from "../../assets/icons/supervisor.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

const Event = ({ events }) => {
  const renderEvents = () => {
    return events.map((event, index) => (
      <div className="event-item" key={index}>
        <div className="card">
          <div className="card-header">
            <div className="header-left">
              <span className="icon icon-event">
                <EventIcon />
              </span>
            </div>
            <div className="header-main">
              <div className="header-main__datetime">
                {`${moment(event.datetime.start).format(
                  "d/MMM/YY - HH:mm"
                )} to ${moment(event.datetime.finish).format("HH:mm")}`}
              </div>
              <div className="header-main__title">{event.title}</div>
              <div className="header-main__location">
                Location: <span className="text-primary">{event.location}</span>
              </div>
            </div>
            <div className="header-right">
              <span className="icon icon-edit">
                <EditIcon />
              </span>
            </div>
          </div>
          <div className="card-body">
            <div className="card-body__participant">
              <span className="icon icon-supervisor">
                <SupervisorIcon />
              </span>
              <div className="participant-list">
                {event.participants.map((participant, index) => (
                  <div className="participant-item" key={index}>
                    <img
                      className="participant-avatar"
                      src={
                        participant.avatar ||
                        "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/d9/0d98cbc7-0408-518e-a67d-50ba01ca1bfa/5f120523682a4.image.jpg"
                      }
                      alt=""
                    />
                    <div className="participant-name">{participant.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-body__notes">
              <span className="text-bold">Notes: </span>
              {event.notes}
            </div>
          </div>
          <div className="card-footer">
            <div className="card-footer__author">
              Created by <span className="text-bold">{event.author}</span>
            </div>
            <div className="card-footer__actions">
              <div className="actions-button__wrapper">
                <button className="btn btn">Cancel</button>
                <button className="btn btn-primary">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="event-list">{renderEvents()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.sort((a, b) =>
      new Date(a.create_at) < new Date(b.create_at)
        ? 1
        : new Date(b.create_at) < new Date(a.create_at)
        ? -1
        : 0
    ),
  };
};

export default connect(mapStateToProps)(Event);
