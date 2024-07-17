// src/App.js
import React, { useState } from 'react';
import { Table, Button, Modal, Select } from 'antd';
import Swal from 'sweetalert2';

const { Option } = Select;

const leadsData = [
  {
  "agendacion":"2024-06-01T22:00:00.000Z",
  "email":"firiiiion@sirviiioslfm.iom",
  "uTM_Source":"ig_Instagram_Reels",
  "uTM_Campaign":"DE_Inversion_ES_New",
  "uTM_Medium":"cpc",
  "uTM_Term":"v1_vertical - Copia",
  "uTM_Content":"abierta_españa",
  "closer":"Juanjo",
  "estado":"",
  "row":2
  },
  {
  "agendacion":"2024-06-02T22:00:00.000Z",
  "email":"76robirtfirriiro@imiil.iom",
  "uTM_Source":"fb_Facebook_Mobile_Reels",
  "uTM_Campaign":"DO_Estetica_US",
  "uTM_Medium":"cpc",
  "uTM_Term":"v3_vertical",
  "uTM_Content":"abierta_us",
  "closer":"Juanjo",
  "estado":"",
  "row":3
  },
  {
  "agendacion":"2024-06-03T22:00:00.000Z",
  "email":"vilintinsosi7@imiil.iom",
  "uTM_Source":"ig_Instagram_Reels",
  "uTM_Campaign":"DO_Estetica_AR",
  "uTM_Medium":"cpc",
  "uTM_Term":"v1_bienvenido_vertical",
  "uTM_Content":"abierta_argentina",
  "closer":"Juanjo",
  "estado":"",
  "row":4
  },
  {
  "agendacion":"2024-06-04T22:00:00.000Z",
  "email":"iinriim61@iiloif.iom",
  "uTM_Source":"ig_Instagram_Reels",
  "uTM_Campaign":"DO_Estetica_EU",
  "uTM_Medium":"cpc",
  "uTM_Term":"v9_vertical",
  "uTM_Content":"abierta_europa",
  "closer":"Juanjo",
  "estado":"",
  "row":5
  },
  {
  "agendacion":"2024-06-05T22:00:00.000Z",
  "email":"viliriibironiini6@imiil.iom",
  "uTM_Source":"youtubeads",
  "uTM_Campaign":"signal_argentina",
  "uTM_Medium":"cpc",
  "uTM_Term":"empresa-1000",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":6
  },
  {
  "agendacion":"2024-06-06T22:00:00.000Z",
  "email":"kimi2708riiz@imiil.iom",
  "uTM_Source":"ig_Instagram_Reels",
  "uTM_Campaign":"DO_Estetica_AR",
  "uTM_Medium":"cpc",
  "uTM_Term":"v11 - Copia",
  "uTM_Content":"abierta_argentina",
  "closer":"Juanjo",
  "estado":"",
  "row":7
  },
  {
  "agendacion":"2024-06-07T22:00:00.000Z",
  "email":"mirtinsiirizm24@imiil.iom",
  "uTM_Source":"youtubeads",
  "uTM_Campaign":"abierta_españayandorra",
  "uTM_Medium":"cpc",
  "uTM_Term":"profesiones",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":8
  },
  {
  "agendacion":"2024-06-08T22:00:00.000Z",
  "email":"ionzilis557.fi@imiil.iom",
  "uTM_Source":"",
  "uTM_Campaign":"",
  "uTM_Medium":"",
  "uTM_Term":"",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":9
  },
  {
  "agendacion":"2024-06-09T22:00:00.000Z",
  "email":"soofiinriiiiz@iotmiil.iom",
  "uTM_Source":"ig_Instagram_Stories",
  "uTM_Campaign":"DO_Estetica_AR",
  "uTM_Medium":"cpc",
  "uTM_Term":"v2_bienvenido_vertical",
  "uTM_Content":"similar_argentina",
  "closer":"Juanjo",
  "estado":"",
  "row":10
  },
  {
  "agendacion":"2024-06-10T22:00:00.000Z",
  "email":"jorwinfontilvo.io@imiil.iom",
  "uTM_Source":"afiliados",
  "uTM_Campaign":"",
  "uTM_Medium":"eduardosaaenz",
  "uTM_Term":"",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":11
  },
  {
  "agendacion":"2024-06-11T22:00:00.000Z",
  "email":"ftilliro@imiil.iom",
  "uTM_Source":"fb_Facebook_Mobile_Reels",
  "uTM_Campaign":"DO_Estetica_Europa_CPA",
  "uTM_Medium":"cpc",
  "uTM_Term":"v11",
  "uTM_Content":"abierta_Europa_cpa",
  "closer":"Juanjo",
  "estado":"",
  "row":12
  },
  {
  "agendacion":"2024-06-12T22:00:00.000Z",
  "email":"iirlosrofriiiiz19631963@imiil.iom",
  "uTM_Source":"youtubeads",
  "uTM_Campaign":"abierta_usa",
  "uTM_Medium":"cpc",
  "uTM_Term":"empresa1000",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":13
  },
  {
  "agendacion":"2024-06-13T22:00:00.000Z",
  "email":"sonitijmijil80@iotmiil.iom",
  "uTM_Source":"ig_Instagram_Stories",
  "uTM_Campaign":"DO_Estetica_ES",
  "uTM_Medium":"cpc",
  "uTM_Term":"v10_vertical - Copia",
  "uTM_Content":"intereses_españayandorra",
  "closer":"Juanjo",
  "estado":"",
  "row":14
  },
  {
  "agendacion":"2024-06-14T22:00:00.000Z",
  "email":"iissijini@imiil.iom",
  "uTM_Source":"fb_Facebook_Mobile_Reels",
  "uTM_Campaign":"DE_Inversion_Europa_New",
  "uTM_Medium":"cpc",
  "uTM_Term":"v1_vertical - Copia",
  "uTM_Content":"abierta_mexico",
  "closer":"Juanjo",
  "estado":"",
  "row":15
  },
  {
  "agendacion":"2024-06-15T22:00:00.000Z",
  "email":"miriormi82@imiil.iom",
  "uTM_Source":"ig_Instagram_Feed",
  "uTM_Campaign":"DO_Estetica_Europa",
  "uTM_Medium":"cpc",
  "uTM_Term":"v2_vertical",
  "uTM_Content":"abierta_Europa2",
  "closer":"Juanjo",
  "estado":"",
  "row":16
  },
  {
  "agendacion":"2024-06-16T22:00:00.000Z",
  "email":"mrimbin2011@imiil.iom",
  "uTM_Source":"google",
  "uTM_Campaign":"DO_Search_Brand_ES",
  "uTM_Medium":"cpc",
  "uTM_Term":"oler blocks",
  "uTM_Content":157456354937,
  "closer":"Juanjo",
  "estado":"",
  "row":17
  },
  {
  "agendacion":"2024-06-17T22:00:00.000Z",
  "email":"flor_fio@iotmiil.iom",
  "uTM_Source":"ig_Instagram_Feed",
  "uTM_Campaign":"DO_Estetica_AR",
  "uTM_Medium":"cpc",
  "uTM_Term":"v2_bienvenido_vertical",
  "uTM_Content":"intereses_educacion_argentina",
  "closer":"Juanjo",
  "estado":"",
  "row":18
  },
  {
  "agendacion":"2024-06-18T22:00:00.000Z",
  "email":"xiviiririijo61@imiil.iom",
  "uTM_Source":"instagramorganico",
  "uTM_Campaign":"evento",
  "uTM_Medium":"manychat",
  "uTM_Term":"",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":19
  },
  {
  "agendacion":"2024-06-19T22:00:00.000Z",
  "email":"liliiniti@imiil.iom",
  "uTM_Source":"facebookads",
  "uTM_Campaign":"mexico",
  "uTM_Medium":"retargeting",
  "uTM_Term":"video1",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":20
  },
  {
  "agendacion":"2024-06-20T22:00:00.000Z",
  "email":"miriormi82@imiil.iom",
  "uTM_Source":"ig_Instagram_Feed",
  "uTM_Campaign":"DO_Estetica_Europa",
  "uTM_Medium":"cpc",
  "uTM_Term":"v2_vertical",
  "uTM_Content":"abierta_Europa2",
  "closer":"Juanjo",
  "estado":"",
  "row":21
  },
  {
  "agendacion":"2024-06-21T22:00:00.000Z",
  "email":"josijirifoiilvo@iotmiil.iom",
  "uTM_Source":"youtubeads",
  "uTM_Campaign":"inversion_españa",
  "uTM_Medium":"cpc",
  "uTM_Term":"dynamic1",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":22
  },
  {
  "agendacion":"2024-06-22T22:00:00.000Z",
  "email":"iiiirmilis@imiil.iom",
  "uTM_Source":"ig_Instagram_Reels",
  "uTM_Campaign":"DO_Estetica_Europa",
  "uTM_Medium":"cpc",
  "uTM_Term":"v2_vertical",
  "uTM_Content":"abierta_Europa2",
  "closer":"Juanjo",
  "estado":"",
  "row":23
  },
  {
  "agendacion":"2024-06-23T22:00:00.000Z",
  "email":"intonio.ivili.iiotril@imiil.iom",
  "uTM_Source":"fb_Facebook_Mobile_Feed",
  "uTM_Campaign":"DE_Inversion_ES_New",
  "uTM_Medium":"cpc",
  "uTM_Term":"v1_vertical - Copia",
  "uTM_Content":"abierta_españa",
  "closer":"Juanjo",
  "estado":"",
  "row":24
  },
  {
  "agendacion":"2024-06-24T22:00:00.000Z",
  "email":"miji.rinjinin.mor@iotmiil.iom",
  "uTM_Source":"youtubeads",
  "uTM_Campaign":"empleo_españa",
  "uTM_Medium":"cpc",
  "uTM_Term":"pareja-2",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":25
  },
  {
  "agendacion":"2024-06-25T22:00:00.000Z",
  "email":"sinirox@iotmiil.is",
  "uTM_Source":"instagramorganico",
  "uTM_Campaign":"",
  "uTM_Medium":"bio",
  "uTM_Term":"",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":26
  },
  {
  "agendacion":"2024-06-26T22:00:00.000Z",
  "email":"vi767011@imiil.iom",
  "uTM_Source":"fb_Facebook_Mobile_Reels",
  "uTM_Campaign":"DO_Estetica_AR",
  "uTM_Medium":"cpc",
  "uTM_Term":"v1_bienvenido_vertical",
  "uTM_Content":"intereses_educacion_argentina",
  "closer":"Juanjo",
  "estado":"",
  "row":27
  },
  {
  "agendacion":"2024-06-27T22:00:00.000Z",
  "email":"miilin.firiis.2014@imiil.iom",
  "uTM_Source":"ig_Instagram_Stories",
  "uTM_Campaign":"DO_Estetica_AR",
  "uTM_Medium":"cpc",
  "uTM_Term":"v2_bienvenido_vertical",
  "uTM_Content":"similar_argentina",
  "closer":"Juanjo",
  "estado":"",
  "row":28
  },
  {
  "agendacion":"2024-06-28T22:00:00.000Z",
  "email":"rofiiiriiz@imiil.iom",
  "uTM_Source":"youtubeads",
  "uTM_Campaign":"abierta_Europa",
  "uTM_Medium":"cpc",
  "uTM_Term":"v6",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":29
  },
  {
  "agendacion":"2024-06-29T22:00:00.000Z",
  "email":"iristiinnoorfirmiir@imiil.iom",
  "uTM_Source":"",
  "uTM_Campaign":"",
  "uTM_Medium":"",
  "uTM_Term":"",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":30
  },
  {
  "agendacion":"2024-06-30T22:00:00.000Z",
  "email":"iiinimirii_00@iotmiil.iom",
  "uTM_Source":"ig_Instagram_Feed",
  "uTM_Campaign":"DO_Estetica_AR",
  "uTM_Medium":"cpc",
  "uTM_Term":"v1_bienvenido_vertical",
  "uTM_Content":"intereses_educacion_argentina",
  "closer":"Juanjo",
  "estado":"",
  "row":31
  },
  {
  "agendacion":"2024-07-01T22:00:00.000Z",
  "email":"vitti165@imiil.iom",
  "uTM_Source":"",
  "uTM_Campaign":"",
  "uTM_Medium":"",
  "uTM_Term":"",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":32
  },
  {
  "agendacion":"2024-07-02T22:00:00.000Z",
  "email":"lilimiriilifirro@iotmiil.iom",
  "uTM_Source":"youtubeads",
  "uTM_Campaign":"signal_argentina",
  "uTM_Medium":"cpc",
  "uTM_Term":"pareja-2",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":33
  },
  {
  "agendacion":"2024-07-03T22:00:00.000Z",
  "email":"biiiimin@imiil.iom",
  "uTM_Source":"",
  "uTM_Campaign":"",
  "uTM_Medium":"",
  "uTM_Term":"",
  "uTM_Content":"",
  "closer":"Juanjo",
  "estado":"",
  "row":34
  }
  ]

const GrdLeads = () => {
  const [leads, setLeads] = useState(leadsData);
  const [visible, setVisible] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [status, setStatus] = useState('');

  const showModal = (lead) => {
    setSelectedLead(lead);
    setVisible(true);
  };

  const handleOk = () => {
    if (!status) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, selecciona un estado.',
      });
      return;
    }

    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.row === selectedLead.row ? { ...lead, estado: status } : lead
      )
    );

    Swal.fire({
      icon: 'success',
      title: 'Estado Actualizado',
      text: `El estado del lead ha sido actualizado a ${status}.`,
    });

    setVisible(false);
    setStatus('');
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: 'Agendación',
      dataIndex: 'agendacion',
      key: 'agendacion',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'UTM Source',
      dataIndex: 'uTM_Source',
      key: 'uTM_Source',
    },
    {
      title: 'UTM Campaign',
      dataIndex: 'uTM_Campaign',
      key: 'uTM_Campaign',
    },
    {
      title: 'UTM Medium',
      dataIndex: 'uTM_Medium',
      key: 'uTM_Medium',
    },
    {
      title: 'UTM Term',
      dataIndex: 'uTM_Term',
      key: 'uTM_Term',
    },
    {
      title: 'UTM Content',
      dataIndex: 'uTM_Content',
      key: 'uTM_Content',
    },
    {
      title: 'Closer',
      dataIndex: 'closer',
      key: 'closer',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
    },
    {
      title: 'Acción',
      key: 'action',
      render: (text, record) => (
        <Button type="primary" onClick={() => showModal(record)}>
          Actualizar Estado
        </Button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <Table dataSource={leads} columns={columns} rowKey="row" />
      <Modal
        title="Actualizar Estado del Lead"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select
          style={{ width: '100%' }}
          placeholder="Selecciona el estado"
          onChange={setStatus}
        >
          <Option value="Contactado">Contactado</Option>
          <Option value="Esperando respuesta">Esperando respuesta</Option>
          <Option value="En llamada">En llamada</Option>
          <Option value="Win">Win</Option>
          <Option value="Lose">Lose</Option>
        </Select>
      </Modal>
    </div>
  );
};

export default GrdLeads;
