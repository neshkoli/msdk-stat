import React, { useEffect, useState } from 'react'
import DragArea from './components/DragArea'

export default function App() {

  const [text, setText] = useState('');
  const [statsArray, setStatsArray] = useState([]);

  useEffect(() => {
    if (text) {
      const indexes = [];
      const stats = [];
      let i = 0;
      while (i !== -1) {
        i = text.indexOf('meetingStats', i + 1);
        if (i !== -1) indexes.push(i)
      };
      for (let j = 0; j < indexes.length; j++) {
        const statsIndex = indexes[j];
        const s = text.substring(text.indexOf('[', statsIndex) + 1, text.indexOf(']', statsIndex))
        stats.push(JSON.parse(s))
      }
      setStatsArray(stats)
    }
  }, [text])

  useEffect(() => {
    if (statsArray[1]) console.log(statsArray[1]['upStreamSummery']['bitrate']);
  }, [statsArray])

  return (
    <div>
      {text ? <div>{JSON.stringify(statsArray[1])/* .map(s => <div><div>{JSON.stringify(s)}</div><div>
      </div></div>) */}</div> :
        <DragArea setText={setText} />}
    </div>
  )
}
