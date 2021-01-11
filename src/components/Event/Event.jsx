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
          <div className="card-header__time">
            <span className="icon icon-event">
              <EventIcon />
            </span>
            {`${moment(event.datetime.start).format(
              "d/MMM/YY - hh:mm"
            )} to ${moment(event.datetime.finish).format("hh:mm")}`}
            <span className="icon icon-edit">
              <EditIcon />
            </span>
          </div>
          <div className="card-header">
            <div className="card-header__title">{event.title}</div>
            <div className="card-header__location">
              Location: <span className="text-primary">{event.location}</span>
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
                        "data:image/jpeg;base64,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"
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
                <button className="btn btn-secondary">Cancel</button>
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
