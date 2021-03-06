import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cron from "cron";

import {
  getWatchlist,
  removeOneFromWatchlist,
  getLiveWatchlistQuotes,
} from "../../store/watchlist";
import "./WatchList.css";

export default function WatchList({ sessionUser }) {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);
  const watchlist = useSelector((state) => state.watchlist);
  const watchlistId = useSelector((state) => state.loading.watchlistId);

  useEffect(() => {
    dispatch(getWatchlist(sessionUser));
    //await dispatch(getLiveWatchlistQuotes(watchlistId, watchlist));
    //
    // const job = new cron.CronJob(
    //   "* * * * * *",
    //   function () {
    //     console.log("You will see this message every second");
    //   },
    //   null,
    //   true,
    //   "America/Los_Angeles"
    // );
    // job.start();
  }, [dispatch, sessionUser]);

  const handleremoveFromWatchlist = (assetId) => {
    dispatch(removeOneFromWatchlist(watchlistId, assetId));
  };

  return (
    <>
      {watchlist && (
        <ul>
          {Object.values(watchlist).map((asset) => {
            const quote = assets[asset.id].quote;

            return (
              <li>
                <button
                  className="redux-button"
                  onClick={() => handleremoveFromWatchlist(asset.id)}
                >
                  -{" "}
                </button>
                {"  "}
                {asset.symbol} {quote.USD.price.toFixed(2)}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
