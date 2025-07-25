const jobData = [
  {
    "job_description": "Power Plug (Complete) Male - Replace",
    "job_code": "A001A",
    "part_number": "22-02378-00PK10",
    "part_description": "Plug, Power",
    "labour_hours": 0.5
  },
  {
    "job_description": "Cable, 460 V  - Replace",
    "job_code": "A002A",
    "part_number": "22-66654-20",
    "part_description": "Cable MSC ContainerFlex FG7OK 4G4 11awg (per meter)",
    "labour_hours": 0.5
  },
  {
    "job_description": "Humidity Sensor  - Replace",
    "job_code": "A037A",
    "part_number": "76-66694-00",
    "part_description": "Sensor, Humidity W/Bracket  (HS)",
    "labour_hours": 1.25
  },
  {
    "job_description": "Evaporator access panel   - Remove and refit",
    "job_code": "B082E",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.25
  },
  {
    "job_description": "Cable, 460 V  - Splice",
    "job_code": "A002X",
    "part_number": "22-50463-00PK5",
    "part_description": "SPLICE KIT FAST III",
    "labour_hours": 0.5
  },
  {
    "job_description": "Condenser fan motor capacitor - Replace",
    "job_code": "A005A",
    "part_number": "22-50088-00",
    "part_description": "Capacitor, EF, 20uF (High Speed)",
    "labour_hours": 1.5
  },
  {
    "job_description": "Condenser grille  - Remove and refit",
    "job_code": "B077E",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.25
  },
  {
    "job_description": "Service Fee",
    "job_code": "F003U",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.75
  },
  {
    "job_description": "Controller  - Replace",
    "job_code": "A018A",
    "part_number": "12-56012",
    "part_description": "Controller ML3, Green Label, Repaired",
    "labour_hours": 1.0
  },
  {
    "job_description": "Controller Key Pad  - Replace",
    "job_code": "A039A",
    "part_number": "79-66669-05",
    "part_description": "Keypad Assy",
    "labour_hours": 0.5
  },
  {
    "job_description": "Cable Receptacle (Elec Conn) Male - Remove and refit",
    "job_code": "A001E",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.5
  },
  {
    "job_description": "Ambient sensor  - Replace",
    "job_code": "A053A",
    "part_number": "12-00495-02SV",
    "part_description": "Sensor, Ambient / Defrost kit (AMBS / DTS)",
    "labour_hours": 0.5
  },
  {
    "job_description": "Temperature display  - Replace",
    "job_code": "A029A",
    "part_number": "12-00433-00RB",
    "part_description": "Module, Display (Repaired)",
    "labour_hours": 0.5
  },
  {
    "job_description": "Evaporation  coil defrost temperature sensor - Replace",
    "job_code": "A051A",
    "part_number": "12-00495-02SV",
    "part_description": "Sensor, Ambient / Defrost kit (AMBS / DTS)",
    "labour_hours": 0.5
  },
  {
    "job_description": "Coil Assembly Condenser - Replace",
    "job_code": "B075A",
    "part_number": "69NT43-202-20PK5",
    "part_description": "Condenser Coil, 4-Row",
    "labour_hours": 4.0
  },
  {
    "job_description": "Drier filter  - Replace",
    "job_code": "B087A",
    "part_number": "14-00464-20PK25",
    "part_description": "N/A",
    "labour_hours": 0.5
  },
  {
    "job_description": "Refrigerant R134A Charge  - Recharge",
    "job_code": "E001II",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.5
  },
  {
    "job_description": "Transformer, Current Sensing - Replace",
    "job_code": "A028A",
    "part_number": "10-00439-00",
    "part_description": "Transformer, Current Sensing (CS)",
    "labour_hours": 0.5
  },
  {
    "job_description": "Valve Suction Modulation - Remove and refit",
    "job_code": "B123E",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.5
  },
  {
    "job_description": "Circuit breaker, 460 V  - Replace",
    "job_code": "A008A",
    "part_number": "66U1-7842-13",
    "part_description": "Breaker, Circuit - 460 vac, 25 Amp, (CB1)",
    "labour_hours": 1.0
  },
  {
    "job_description": "Compressor contactor   - Replace",
    "job_code": "A013A",
    "part_number": "10-00431-07",
    "part_description": "Contactor, 30A",
    "labour_hours": 0.75
  },
  {
    "job_description": "Temperature display  - Re-secure",
    "job_code": "A029D",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.25
  },
  {
    "job_description": "Fuse  - Replace",
    "job_code": "A034A",
    "part_number": "22-02336-08",
    "part_description": "Fuse, 7.5 Amp",
    "labour_hours": 0.25
  },
  {
    "job_description": "DataCorder Battery Pack   - Replace",
    "job_code": "A041A",
    "part_number": "30-50377-00",
    "part_description": "Controller/DataCORDER Module Standard Battery Holder with Connector",
    "labour_hours": 0.25
  },
  {
    "job_description": "Travel",
    "job_code": "F001SS",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.5
  },
  {
    "job_description": "Compressor, complete (with motor) - Replace",
    "job_code": "B064A",
    "part_number": "18-10178-22",
    "part_description": "COMPRESSOR SCROLL PRIMELINE",
    "labour_hours": 2.0
  },
  {
    "job_description": "Refrigerant R134A Charge  - Top up",
    "job_code": "E001GG",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.5
  },
  {
    "job_description": "Liquid line service valve  - Re-secure",
    "job_code": "B116D",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.44
  },
  {
    "job_description": "Terminal Mounting Kit Compressor - 5 kit - Replace",
    "job_code": "B069A",
    "part_number": "76-50210-00",
    "part_description": "Kit, Compressor Terminal Wiring (Single Voltage)",
    "labour_hours": 1.0
  },
  {
    "job_description": "Oil charge - Replace",
    "job_code": "B074A",
    "part_number": "07-00292-00",
    "part_description": "SW20 Compressor Oil, Castrol Icematic (Quart) (1 liter)",
    "labour_hours": 0.5
  },
  {
    "job_description": "High-pressure cut-out  - Replace",
    "job_code": "B094A",
    "part_number": "12-00309-06",
    "part_description": "Switch, High Pressure (HPS)",
    "labour_hours": 0.5
  },
  {
    "job_description": "Service valve gasket   - Replace",
    "job_code": "B110A",
    "part_number": "17-10811-05",
    "part_description": "Gasket, Service Valve (2 Bolt) (excl all related jobs)",
    "labour_hours": 0.25
  },
  {
    "job_description": "Valve Suction Modulation - Replace",
    "job_code": "B123A",
    "part_number": "14-00353-20",
    "part_description": "Piston and Motor Assembly",
    "labour_hours": 0.25
  },
  {
    "job_description": "Control sensor (supply air)  - Replace",
    "job_code": "A058A",
    "part_number": "12-00395-01SV",
    "part_description": "Sensor, Supply, Assembly (SRS & STS)",
    "labour_hours": 0.75
  },
  {
    "job_description": "Cable, 460 V  - Rewire",
    "job_code": "A002G",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.25
  },
  {
    "job_description": "Controller Key Pad  - Re-secure",
    "job_code": "A039D",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.25
  },
  {
    "job_description": "Fan  - Remove and refit",
    "job_code": "A011E",
    "part_number": "N/A",
    "part_description": "N/A",
    "labour_hours": 0.5
  },
  {
    "job_description": "Evaporator Fan Motor  - Replace",
    "job_code": "A030A",
    "part_number": "54-00742-00",
    "part_description": "Motor, evaporator",
    "labour_hours": 1.0
  },
  {
    "job_description": "Fan  - Replace",
    "job_code": "A011A",
    "part_number": "38-00557-00",
    "part_description": "Fan, Evaporator",
    "labour_hours": 0.5
  },
  {
    "job_description": "Evaporator access panel   - Replace",
    "job_code": "B082A",
    "part_number": "79-01697-06",
    "part_description": "N/A",
    "labour_hours": 0.5
  }
]