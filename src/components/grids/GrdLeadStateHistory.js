// src/App.js
import React, { useState } from 'react';
import { Table, Input } from 'antd';

const leadsData = [
  { "email": "firiiiion@sirviiioslfm.iom", "fecha": "2024-07-17T05:16:13.862Z", "estadoActual": "Contactado", "row": 2 },
  { "email": "firiiiion@sirviiioslfm.iom", "fecha": "2024-07-17T05:17:09.881Z", "estadoActual": "Esperando respuesta", "row": 3 },
  { "email": "firiiiion@sirviiioslfm.iom", "fecha": "2024-07-17T05:18:48.818Z", "estadoActual": "Lose", "row": 4 },
  { "email": "76robirtfirriiro@imiil.iom", "fecha": "2024-07-17T05:20:14.481Z", "estadoActual": "Contactado", "row": 5 },
  { "email": "76robirtfirriiro@imiil.iom", "fecha": "2024-07-17T05:21:12.664Z", "estadoActual": "Esperando respuesta", "row": 6 },
  { "email": "76robirtfirriiro@imiil.iom", "fecha": "2024-07-17T05:21:47.974Z", "estadoActual": "En llamada", "row": 7 },
  { "email": "76robirtfirriiro@imiil.iom", "fecha": "2024-07-17T05:22:53.291Z", "estadoActual": "Win", "row": 8 }
];

const GrdLeadStateHistory = () => {
  const [leads] = useState(leadsData);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredLeads = leads.filter(lead =>
    lead.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Estado Actual',
      dataIndex: 'estadoActual',
      key: 'estadoActual',
    },
  ];

  return (
    <div className="p-6">
      <Input
        placeholder="Buscar por email"
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: '16px' }}
      />
      <Table dataSource={filteredLeads} columns={columns} rowKey="row" />
    </div>
  );
};

export default GrdLeadStateHistory;
