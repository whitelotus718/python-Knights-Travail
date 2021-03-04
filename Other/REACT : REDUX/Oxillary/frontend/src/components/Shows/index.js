import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    getShow,
  } from "../../store/show";

  export default function Show({ sessionUser }) {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.show);
    const showId = useSelector((state) => state.loading.showId);

    useEffect(() => {
        dispatch(getShow(sessionUser));
        
      }, [dispatch, sessionUser]);

      return (
        <>
          {show && (
            <ul>
              {Object.values(show).map((input) => {
                const artistName = input[artistName]
                const date = input[date]
                const genre = input[genre]
    
                return (
                    <h1>{artistName} {date} {genre}</h1>
                );
              })}
            </ul>
          )}
        </>
      );
    }
    