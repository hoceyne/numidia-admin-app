import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

function Planing() {
    const Swal = require("sweetalert2");
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [ets, setEvents] = useState([]);
    const role = localStorage.getItem("role");

    const navigate = useNavigate();
    const [id, setId] = useState(0);
    const drop = () => {
        alert("itemdroped");
    };
    const handleDateSelect = (selectInfo) => {
        let title = prompt("Please enter a new title for your event");
        let calendarApi = selectInfo.view.calendar;

        if (title) {
            let i = id;
            setId(i + 1);
            calendarApi.addEvent({
                id: id,
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
            let event = {
                id: id,
                title,
            };
            let list = ets;
            list.push(event);
            console.log(list);
            setEvents(list);
        }
        calendarApi.unselect();
    };
    let handleEventClick = (clickInfo) => {
        alert("dlsads");
        clickInfo.event.remove();
    };

    let handleEvents = (events) => {
        // alert("get events")
    };

    useEffect(() => {
        if (token) {
        } else {
            // navigate("/login");
        }
    }, []);

    return (
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-white mb-5 border-slate-700 border-t-4 ">
            <div className="p-3 mt-4">
                <FullCalendar
                    plugins={[
                        dayGridPlugin,
                        listPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                    ]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,list",
                    }}
                    eventContent={renderEventContent}
                    initialView="dayGridMonth"
                />
            </div>
        </div>
    );
}

export default Planing;

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}
