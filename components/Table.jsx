import React, { useMemo } from "react";
import Head from "next/head";
import styles from "../styles/table.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { dummydata, dummyday } from "./tablecomponents/Dummydata";

const Table = ({ conferences }) => {
    console.log('conferences', conferences);
    const groupBy = (objectArray, property) => {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            if(!acc[key]){
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    const groupedItems = groupBy(dummydata, 'time');
    const groupdays = groupBy(dummyday, 'day');

    const containsObject = (list, obj) => {
        var x; 
        for(x in list){
            if(list.hasOwnProperty(x) && list[x] === obj){
                return true;
            }
        }
        return false;
    }

    return (
        <div>
            <div className={styles.table_container}>
                <div className={styles.table_heading}>
                    <h1 className={styles.event_name}>Event Schedule</h1>
                    <p className={styles.event_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex pariatur corporis nihil ipsum atque.</p>
                </div>
                <div className={styles.table_wrapper}>
                    <table className={styles.table_property}>
                    <thead>
                    <tr className={styles.table_header}>
                        <th className={styles.table_header_row}></th>
                            {Object.keys(groupdays).map((day) => ( 
                                <th scope='col' className={styles.table_header}>{day}</th>
                            ))}
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(groupedItems).map((time) => (
                        <tr className={styles.table_row} >
                            <th scope="row" className={styles.table_header}>{time}</th>
                            {groupedItems[time].map(data => ( 
                                <td className={styles.table_data}>
                                    {data.event[0].Tue.date}<br />
                                    <div key={data.event[0].Tue.id} className={`${styles.insideInfo}`}>
                                        <span>{data.event[0].Tue.name}</span><br />
                                        <span>{data.event[0].Tue.schedule}</span>
                                    </div>
                                </td> 
                            ))}
                            {groupedItems[time].map(data => (
                                <td className={styles.table_data}>
                                    {data.event[0].Wed.date}<br />
                                    <div key={data.event[0].Wed.id} className={styles.insideInfo}>
                                        <span>{data.event[0].Wed.name}</span><br />
                                        <span>{data.event[0].Wed.schedule}</span>
                                    </div>
                                </td>
                            ))}
                            {groupedItems[time].map(data => (
                                <td className={styles.table_data}>
                                    {data.event[0].Thu.date}<br />
                                    <div key={data.event[0].Thu.id} className={styles.insideInfo}>
                                        <span>{data.event[0].Thu.name}</span><br />
                                        <span>{data.event[0].Thu.schedule}</span>
                                    </div>
                                </td>
                            ))}
                            {groupedItems[time].map(data => (
                                <td className={styles.table_data}>
                                    {data.event[0].Fri.date}<br />
                                    <div key={data.event[0].Fri.id} className={styles.insideInfo}>
                                        <span>{data.event[0].Fri.name}</span><br />
                                        <span>{data.event[0].Fri.schedule}</span>
                                    </div>
                                </td>
                            ))}
                            {groupedItems[time].map(data => (
                                <td className={styles.table_data}>
                                    {data.event[0].Sat.date}<br />
                                    <div key={data.event[0].Sat.id} className={styles.insideInfo}>
                                        <span>{data.event[0].Sat.name}</span><br />
                                        <span>{data.event[0].Sat.schedule}</span>
                                    </div>
                                </td>
                            ))}
                            {groupedItems[time].map(data => (
                                <td className={styles.table_data}>
                                    {data.event[0].Sun.date}<br />
                                    <div key={data.event[0].Sun.id} className={styles.insideInfo}>
                                        <span>{data.event[0].Sun.name}</span><br />
                                        <span>{data.event[0].Sun.schedule}</span>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody> 
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;

export async function getStaticProps(){
    const client = new ApolloClient({
        uri: 'https://api.react-finland.fi/graphql?',
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`
        query GetConferences{
            ConferenceData {
                time
                event {
                    Tue{
                        date
                        name
                        schedule
                    }
                    Wed{
                        date
                        name
                        schedule
                    }
                    Thu{
                        date
                        name
                        schedule
                    }
                    Fri{
                        date
                        name
                        schedule
                    }
                    Sat{
                        date
                        name
                        schedule
                    }
                    Sun{
                        date
                        name
                        schedule
                    }
                }
            }
        }
        `
    })

    return {
        props: {
            conferences: data.ConferenceData
        }
    }
}

