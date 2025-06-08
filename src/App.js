import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const client = mqtt.connect('mqtt://test.mosquitto.org:8080');

    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      client.subscribe('my/iot/topic');
    });

    client.on('message', (topic, payload) => {
      setMessage(payload.toString());
    });

    return () => client.end();
  }, []);

  return (
    <div>
      <h1>IoT Desktop App</h1>
      <p>Message from IoT device: {message}</p>
    </div>
  );
}

export default App;
