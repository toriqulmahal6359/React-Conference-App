import styles from "../styles/conference.module.css";
import { useState, useRef, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { NodeNextRequest } from "next/dist/server/base-http/node";

const Conference = () => {
    // const [enabled, setEnabled] = useState(false);
    // useEffect(() => {
    //     const animation = requestAnimationFrame(()=> setEnabled(true));
    //     return () => {
    //         cancelAnimationFrame(animation);
    //         setEnabled(false);
    //     };
    // }, []);

    // if(!enabled){
    //     return null;
    // }
    
    const conferenceEvents = [
        { id: 'Draggable-0', refer: 'organizer', name: "Organizer"},
        { id: 'Draggable-1', refer: 'speakers', name: "Speakers"},
        { id: 'Draggable-2', refer: 'location', name: "Location"},
        { id: 'Draggable-3', refer: 'schedule', name: "Schedule"},
        { id: 'Draggable-4', refer: 'sponsors', name: "Sponsors"},
    ];

    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ?  '#FFC93E' : '#FFFFFF',
        padding: 8,
        width: 250
    });

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: 'none',
        padding: 16,
        margin: '0 0 8px 0',
        background: isDragging ? '#FFFFFF': '#FFC93E',
        ...draggableStyle
    })

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(conferenceEvents);
    }, []);

    const onDragEnd = (result) => {
        if(!result.destination){
            return;
        }
        const reorderedItems = reorder(items, result.source.index, result.destination.index);
        console.log(reorder);
        setItems(reorderedItems);
    }

    return (
        <div>
        <div>
            <div className={styles.conferenceContainer}>
                <div className={styles.conference_heading}>
                    <h1 className={styles.conference_name}>Conference Info</h1>
                    <p className={styles.conference_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae?</p>
                </div>
                <div className={styles.conference}>
                    <div className={styles.conferenceWrapper}>
                        <div className={styles.leftpane}>
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="conference_id">
                                    {(provided, snapshot) => (
                                        <ul className={`conference_id ${styles.eventList}`} {...provided.droppableProps} ref={provided.innerRef}>
                                        {items.map((event, index) => {
                                            return (
                                                <Draggable key={event.id} draggableId={event.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <li className={styles.eventpart} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                            <div className={styles.eventItem}>
                                                                <div className={styles.imageBorder}>
                                                                    <Image src="/img/conference/Vector.svg" alt="vector" width={25} height={25} />
                                                                </div>
                                                                <span className={styles.eventName}>{ event.name }</span>
                                                            </div>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            )
                                        })}
                                        {provided.placeholder}
                                        </ul>
                                    )}
                                </Droppable>
                            </DragDropContext>        
                        </div>
                        <div className={styles.rightpane}>
                            <div className={styles.people}>
                                <div className={styles.peopleWrapper}>
                                    <div className={styles.peopleCard}>
                                        <div className={styles.peopleImg}>
                                            <Image src="/img/conference/Rectangle 215.png" alt="conference" width={120} height={120} />
                                        </div>
                                        <div className={styles.peopleList}>
                                            <div className={styles.peopleId}>
                                                <span className={styles.peopleName}>John Blain Doe</span>
                                                <span className={styles.peopleCompany}>Company Name</span>
                                            </div>
                                            <div className={styles.peopleDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aspernatur laboriosam suscipit cupiditate nesciunt ea omnis eius laborum sint explicabo!</div>
                                        </div>
                                    </div>
                                    <div className={styles.peopleCard}>
                                        <div>
                                            <Image src="/img/conference/Rectangle 217.png" alt="conference" width={120} height={120} />
                                        </div>
                                        <div className={styles.peopleList}>
                                            <div className={styles.peopleId}>
                                                <span className={styles.peopleName}>John Blain Doe</span>
                                                <span className={styles.peopleCompany}>Company Name</span>
                                            </div>
                                            <div className={styles.peopleDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aspernatur laboriosam suscipit cupiditate nesciunt ea omnis eius laborum sint explicabo!</div>
                                        </div>
                                    </div>
                                    <div className={styles.peopleCard}>
                                        <div className={styles.peopleImg}>
                                            <Image src="/img/conference/Rectangle 219.png" alt="conference" width={120} height={120} />
                                        </div>
                                        <div className={styles.peopleList}>
                                            <div className={styles.peopleId}>
                                                <span className={styles.peopleName}>John Blain Doe</span>
                                                <span className={styles.peopleCompany}>Company Name</span>
                                            </div>
                                            <div className={styles.peopleDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aspernatur laboriosam suscipit cupiditate nesciunt ea omnis eius laborum sint explicabo!</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Conference;