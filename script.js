const DATA = {"categories":[{"id":"monitoring","name":"Patient Monitoring","blurb":"Multi-parameter monitors, pulse oximeters, BP & capnography","icon":"monitor"},{"id":"cardiology","name":"Cardiology & Diagnostics","blurb":"ECG machines, Holter recorders, spirometers & Dopplers","icon":"heart"},{"id":"respiratory","name":"Respiratory & Sleep","blurb":"BiPAP, CPAP, oxygen concentrators, nebulizers & suction","icon":"lung"},{"id":"infusion","name":"Infusion & Fluid","blurb":"Syringe & infusion pumps, fluid warmers, DVT pumps","icon":"drop"},{"id":"emergency","name":"Emergency & Resuscitation","blurb":"Defibrillators, AEDs & video laryngoscopes","icon":"bolt"},{"id":"surgical","name":"Surgical & OT","blurb":"Electrosurgical units, OT tables, lights & tourniquets","icon":"scalpel"},{"id":"maternal","name":"Maternal & Neonatal","blurb":"Fetal monitors & Dopplers, warmers, phototherapy","icon":"baby"},{"id":"poc","name":"Point-of-Care","blurb":"Thermometers, vein finders & bedside diagnostics","icon":"pulse"}],"products":[{"id":"mpm","cat":"monitoring","name":"Multi-Parameter Patient Monitor","subtitle":"8\"–12.1\" ICU / OT monitors for adult, pediatric & neonatal patients","image":"monitor_cms6000.jpg","featured":true,"models":["CMS6000","VD-8M","Hwatime XM-750","VD-9000B","VD-9000T","Yonker YK-8000C"],"tags":["ECG","NIBP","SpO2","Temp","IBP-ready"],"features":["8\" TFT colour display, multi-language interface","ECG, NIBP, SpO2, Pulse Rate, Respiration, Temperature & IBP (upgradable)","Up to 8-channel synchronous waveform display","96-hour graphic & tabular trends, 500 NIBP record storage","AC/DC built-in rechargeable lithium battery for uninterrupted monitoring"],"specs":{"Display":"8\" TFT colour LCD","ECG":"5 / 12 lead selectable","Heart rate":"Adult 15–300 bpm","NIBP":"Oscillometry, 10–270 mmHg","SpO2":"0–100%, accuracy ±2%","Temperature":"Dual-channel, 0–50 °C","Net weight":"3.9 kg"},"certs":["FDA","CE"]},{"id":"mindray-epm12","cat":"monitoring","name":"Mindray ePM12 Patient Monitor","subtitle":"12\" capacitive touchscreen with Masimo SET® SpO2","image":"monitor_epm12.jpg","featured":true,"models":["Mindray ePM12"],"brand":"Mindray","tags":["Touchscreen","Masimo SET®","Afib","IP44"],"features":["12\" multi-gesture capacitive touchscreen, intuitive UI","3/5-lead ECG, Masimo SET® SpO2, NIBP, Respiration, Temperature","Arrhythmia analysis with atrial fibrillation (Afib) detection","48 hours of full disclosure, trend, alarm & event storage","IP44 rated, medical-grade plastics for stringent cleaning"],"specs":{"Display":"12\" capacitive touch","Waveforms":"10","Weight":"10.6 lbs","Battery":"Li-ion 4500 mAh, ≥4 h","Recorder":"3-trace thermal (optional)","Connectivity":"HL7, DIAP"},"certs":["FDA","CE"]},{"id":"bpl-ultima","cat":"monitoring","name":"BPL Ultima Prime-D Monitor","subtitle":"12.1\" high-resolution monitor with ST analysis","image":null,"models":["BPL Ultima-Prime-D"],"brand":"BPL","tags":["ST analysis","Dual IBP","EtCO2-ready"],"features":["12.1\" TFT high-resolution display, optional touchscreen","Arrhythmia detection & ST analysis","ECG, RESP, digital SpO2, NIBP, Temp standard","Optional dual IBP, EtCO2, AGM, ICG & thermal recorder","BPL Medius+ central nursing station connectivity"],"specs":{"Display":"12.1\" TFT","Waveforms":"up to 10","Dimensions":"318 × 264 × 152 mm","Weight":"4.5 kg","Brand":"BPL"},"certs":["FDA","CE"]},{"id":"comen-monitors","cat":"monitoring","name":"Premium Bedside Monitors","subtitle":"Branded multi-para monitors from leading OEMs","image":"monitor_comen.jpg","featured":true,"models":["Contec CMS7000","Contec CMS8000","Contec CMS9000","Philips Goldway GS20","COMEN STAR8000E","Schiller Truscope-III","EDAN-X12"],"tags":["Multi-brand","ICU-grade"],"features":["12.1\" TFT colour displays, fanless anti-cross-infection design","All-round monitoring for adult, pediatric & neonate","Up to 8-channel waveform, HRV analysis, drug calculation","NIBP modes Manual/Auto/STAT with up to 4800 record storage","Central Monitoring System connectivity via Wi-Fi / wired"],"specs":{"Display":"12.1\" TFT","ECG":"3 / 5-lead","Arrhythmia":"71 events, 60 alarms","NIBP":"Oscillometry","Dimensions":"314 × 145 × 264 mm","Weight":"3.9 kg"},"certs":["FDA","CE"]},{"id":"oximeter-table","cat":"monitoring","name":"Tabletop Pulse Oximeter","subtitle":"Bench-top SpO2 monitoring with NIBP","image":null,"models":["CMS-70A","CMS5100"],"tags":["SpO2","NIBP","Trend"],"features":["TFT + LED display with plethysmogram & bar graph","SpO2 0–100% (1% resolution), PR 30–250 bpm","Reliable readings in weak-filling conditions","Built-in rechargeable Li-polymer battery","Real-time data transmission to PC"],"specs":{"Display":"TFT + LED, 320×240","SpO2 accuracy":"±2% (70–100%)","PR range":"30–250 bpm","Power":"AC 100–240 V","Weight":"1.5 kg (CMS5100)"},"certs":["FDA","CE"]},{"id":"oximeter-hand","cat":"monitoring","name":"Handheld Pulse Oximeter","subtitle":"Portable SpO2 for ward rounds & transport","image":null,"models":["Mindray PM60","Nellcor PM10N","Covidien Nellcor PM-100","Bionet Oxy9wave","CMS-60C","CMS60D1","VD-H200","VDBM-NT1C"],"tags":["Portable","PI","Rechargeable"],"features":["2.8\" colour display with SpO2, PR & PI","Suitable for adult, pediatric & neonatal patients","Adjustable audible & visual alarms","Up to 8 hours continuous working on rechargeable battery","Storage & USB/Bluetooth data upload to PC"],"specs":{"Screen":"2.8\" colour","SpO2":"0–100%, ±2%","PR":"30–250 bpm","PI":"0–20%","Battery":"Li-ion / AA options"},"certs":["FDA","CE"]},{"id":"oximeter-finger","cat":"monitoring","name":"Fingertip Pulse Oximeter","subtitle":"Compact spot-check SpO2 & pulse","image":null,"models":["BPL Smart-Oxy","CMS50D Pro","CMS50D"],"tags":["Fingertip","OLED","Spot-check"],"features":["0.96\" colour OLED, multi-direction display","SpO2 70–100% (±2%), PR 30–250 bpm","Low-power & auto standby","Adjustable brightness with PR sound prompt","Up to 20 hours of use on 2× AAA batteries"],"specs":{"Display":"0.96\" colour","SpO2":"0–100%, ±2%","PR":"30–250 bpm","Power":"2× AAA","Class":"Type BF applied part"},"certs":["FDA","CE"]},{"id":"abpm","cat":"monitoring","name":"Ambulatory BP Monitor","subtitle":"24-hour NIBP Holter for hypertension studies","image":null,"models":["CMS-ABPM50"],"tags":["24-hour","Adult/Ped/Neo","PC software"],"features":["24-hour ambulatory NIBP, up to 350 measurement records","Automatic & manual measurement, up to 300 manual records","HD colour TFT with trend graph & big-font modes","mmHg / kPa units, low-power & error prompts","PC software for trend, histogram & report printing"],"specs":{"Mode":"Upper-arm oscillometry","Interval":"15/30/60/120/240 min","Range":"0–290 mmHg","PR":"40–240 bpm","Power":"2× AA","Safety":"Type BF, defib-proof"},"certs":["FDA","CE"]},{"id":"etco2","cat":"monitoring","name":"EtCO2 Capnograph Monitor","subtitle":"Handheld sidestream & mainstream capnography","image":null,"models":["Contec CA10S (Sidestream)","Contec CA10M (Mainstream)"],"tags":["EtCO2","RR","SpO2"],"features":["End-tidal CO2 & respiration-rate measurement","SpO2 & pulse-rate measurement (CA10S)","Over-limit alarms for EtCO2, RR, SpO2 & PR","1.3\" true-colour LCD, compact & lightweight","For pre-hospital transport, ED, ICU, OT & neonatology"],"specs":{"EtCO2 range":"0–150 mmHg","Resolution":"1 mmHg","RR":"2–150 rpm","SpO2":"30–100% (CA10S)","Protection":"IPX2 (CA10M)"},"certs":["FDA","CE"]},{"id":"ecg","cat":"cardiology","name":"12-Lead ECG Machine","subtitle":"1 / 3 / 6 / 12-channel electrocardiographs","image":"ecg_vd1200e.jpg","featured":true,"models":["VD-300E","VD-600E","VD-1200E","CMS100G","CMS300G","CMS300GA","CMS600G","CMS1200G"],"tags":["12-lead","Thermal print","Auto-analysis"],"features":["12-lead synchronous sampling with digital signal processing","Thermal printer, 5.7\"–10.2\" colour touch + push-button","Auto measurement, calculation, analysis & waveform freezing","USB flash & SD memory, PC transmission via RS232/USB","Built-in rechargeable Li-ion battery, AC/DC conversion"],"specs":{"Leads":"12-lead synchronous","Input":"Floating & defibrillation protected","Frequency response":"0.05–150 Hz","CMRR":"≥100 dB","Sampling":"1000 Hz / 12-bit","Paper":"80 / 110 / 216 mm thermal"},"certs":["FDA","CE"]},{"id":"ecg-brand","cat":"cardiology","name":"Branded ECG Recorders","subtitle":"Bionet & BPL electrocardiographs","image":null,"models":["CardioCare2000","Genx-3","Cardio7","CARDIART-6208-View","Cardiart-9108","CARDIART-9108-D"],"tags":["Multi-brand","Clinical-grade"],"features":["Reliable 1/3/6/12-channel recording from trusted OEMs","Auto-interpretation & measurement of ECG parameters","Thermal printing with adjustable sensitivity & speed","Case memory & PC review software","Portable designs for ward, clinic & field use"],"specs":{"Leads":"up to 12-lead","Display":"LCD / colour","Recording":"Thermal","Brands":"Bionet, BPL"},"certs":["FDA","CE"]},{"id":"holter","cat":"cardiology","name":"ECG Holter Recorder","subtitle":"24–48 hour continuous ambulatory ECG","image":null,"models":["CMS-TLC6000 (48 h)","CMS-TLC5000 (24 h)"],"tags":["12-lead","48-hour","Afib analysis"],"features":["Standard 12-lead, continuous recording up to 48 hours","Flexible atrial-fibrillation & pacemaker analysis","10+ templates for premature beats, long interval & Afib","HRT, T-wave alternans, QTD, VCG & VLP analysis modules","Fast review with 5-min, 1-hour & whole-record HRV"],"specs":{"Lead":"Standard 12-lead","Record time":"24–48 h","CMRR":"≥60 dB","Scan speed":"25 mm/s ±5%","Interface":"USB 2.0"},"certs":["FDA","CE"]},{"id":"spirometer","cat":"cardiology","name":"Diagnostic Spirometer","subtitle":"Portable lung-function testing","image":null,"models":["CMS-SP80B","CMS-SP10"],"tags":["FVC","FEV1","PEF"],"features":["Measures FVC, FEV1, FEV1/FVC, PEF, FEF25/50/75","Flow-volume & volume-time chart display","Patient profile, trend chart & calibration function","Data storage, upload & review via Bluetooth / USB","Rechargeable lithium battery, 2.8\" LCD"],"specs":{"Volume range":"0–10 L","Volume accuracy":"±3% or ±0.05 L","Flow range":"0–16 L/s","Weight":"190 g"},"certs":["FDA","CE"]},{"id":"vascular-doppler","cat":"cardiology","name":"Vascular Doppler","subtitle":"Peripheral arterial & venous blood-flow assessment","image":null,"models":["Bistos BT-200V","VCOMIN-VD-320"],"tags":["4/5/8 MHz","Waveform","Portable"],"features":["High-sensitivity Doppler probe, ergonomic & light","Real-time waveform, data & working parameters","For andrology, urology, microsurgery & plastic surgery","AC & DC battery operation, freeze-display on LCD","USB data transfer, loudspeaker & earphone output"],"specs":{"Ultrasound":"4 / 5 / 8 MHz","HR range":"50–240 bpm","Accuracy":"±2%","Battery life":"≈360 min","Interface":"Sound card"},"certs":["FDA","CE"]},{"id":"bipap","cat":"respiratory","name":"BiPAP Ventilator","subtitle":"Bilevel therapy for respiratory support","image":"bipap_resmart.jpg","featured":true,"models":["BMC RESmart BiPAP Y-30T","Yuwell Auto BiPAP YH-830","Ventmed Bipap Ds8 St30","Philips BiPAP DreamStation"],"tags":["S/T","Auto","Humidifier"],"features":["Target tidal volume with automatic pressure support","Real-time monitoring of pressure, flow, Vte, RR, MV & leak","CPAP, S, S/T, T operating modes","3.5\" colour LCD, 5-step humidifier adjustment","Advanced leak compensation & synchrony"],"specs":{"Modes":"CPAP, S, S/T, T, Auto","Pressure":"4–30 cmH2O","Display":"3.5\" colour LCD","Humidifier":"Integrated, 5-step","Weight":"1.5–2.5 kg"},"certs":["FDA","CE"]},{"id":"cpap","cat":"respiratory","name":"Auto CPAP","subtitle":"Continuous positive airway pressure for sleep apnea","image":null,"models":["BMC Auto CPAP G2","BMC Auto CPAP G2S A20","BMC Auto CPAP G3 A20","Yuwell Auto CPAP YH550","BMC M1 Mini Auto CPAP"],"tags":["Auto","Integrated humidifier","Quiet"],"features":["2.4\" colour screen, 3-button simple operation","Integrated humidifier with large heating plate","Noise as low as 28 dB with optimized reduction design","Automatic leak & altitude compensation","SD-card recording of therapy & fault data"],"specs":{"Mode":"Auto CAP / CAP","Pressure":"4–20 hPa","Humidifier":"Integrated, up to 360 ml","Noise":"<28 dB","Protection":"IP22"},"certs":["FDA","CE"]},{"id":"hfnc","cat":"respiratory","name":"High-Flow Humidifier","subtitle":"Heated humidified high-flow oxygen therapy","image":null,"models":["BMC H-80 Series (H80AS / H80A / H80M)"],"tags":["Up to 80 L/min","Auto O2","9-stage humidity"],"features":["Up to 80 L/min air-oxygen mixed gas delivery","Automatic target oxygen concentration control (21–100%)","Disinfection-free design with backflow-prevention valve","9-stage humidification, 7-level humidity compensation","Hot-standby & real-time monitoring of O2, flow & temp"],"specs":{"Flow rate":"2–80 L/min","O2 range":"21–100%","Screen":"3.5\"","Humidity":"9-stage","Temp range":"29–37 °C"},"certs":["FDA","CE"]},{"id":"oxygen","cat":"respiratory","name":"Oxygen Concentrator","subtitle":"PSA oxygen delivery for home & clinic","image":"oxygen_oxy5.jpg","featured":true,"models":["OXY-5 (5 L)","JAY-5 (5 L)","JAY-5W (5 L)","JAY-10W (10 L dual-flow)"],"tags":["PSA","93% purity","Low noise"],"features":["Pressure Swing Absorption (PSA) technology","93% ±3% oxygen purity with adjustable flow","Large LCD display with purity & fault alarms","Continuous oxygen delivery with maintenance reminder","Four-wheel mobility & easy-change washable filters"],"specs":{"Flow rate":"1–5 L/min (10 L dual-flow)","Purity":"93% ±3%","Outlet pressure":"6–10 PSI","Sound":"≤46–50 dB","Power":"AC 230 V, 50 Hz"},"certs":["FDA","CE"]},{"id":"nebulizer","cat":"respiratory","name":"Ultrasonic Nebulizer","subtitle":"Fine-mist medication delivery","image":"nebulizer_402ai.jpg","models":["Yuwell 402AI"],"tags":["Ultrasonic","350 ml","Hospital/Home"],"features":["1.7 MHz ultrasonic nebulization, ≥3 mL/min rate","350 ml reservoir with large & small cup options","High efficiency, low maintenance & compact design","Suitable for hospital, clinical & home use","Quiet, durable & easy to clean"],"specs":{"Frequency":"1.7 MHz ±10%","Capacity":"150 / 350 ml","Rate":"≥3 mL/min","Power":"≤50 W","Voltage":"AC 220 V ±10%"},"certs":["FDA","CE"]},{"id":"suction","cat":"respiratory","name":"Suction Machine","subtitle":"Electric & pedal surgical suction apparatus","image":null,"models":["Yuwell 7A-23B","Yuwell 7A-23D","Yuwell 7E-A/B","Yuwell 7B Pedal Suction"],"tags":["Oil-free","High vacuum","Twin-jar"],"features":["Oil-free piston pump — no daily oiling, clean & safe","High negative pressure with large flow","Twin 2.5 L glass jars with self-locking caps","Anti-backflow design keeps liquid from re-entering","Pedal model for power-free operation in the field"],"specs":{"Negative pressure":"≥0.09 MPa","Pumping rate":"20–40 L/min","Noise":"≤65 dB","Reservoir":"1000–2500 mL","Power":"AC 220 V"},"certs":["FDA","CE"]},{"id":"sleep-screen","cat":"respiratory","name":"Sleep Screener & Air-O2 Blender","subtitle":"Home sleep testing & oxygen blending","image":null,"models":["BMC PolyWatch YH-600 B Pro","Air Oxygen Blender"],"tags":["Sleep study","CPAP flow","Blender"],"features":["Portable sleep-screening with SpO2 & flow monitoring","CPAP-pressure recording for therapy evaluation","Precision air-oxygen blending for respiratory support","Compact, bedside-friendly design","Data download for clinical review"],"specs":{"Use":"Home sleep test","Parameters":"SpO2, flow, pressure","Type":"Screener + blender"},"certs":["FDA","CE"]},{"id":"syringe-pump","cat":"infusion","name":"Syringe Infusion Pump","subtitle":"Precision micro-infusion for critical care","image":"syringe_byz810.jpg","featured":true,"models":["BYZ-810","CMS-SP950"],"tags":["5–60 ml","Voice alarm","Stackable"],"features":["Rate mode & time-volume mode with HD LCD","Compatible with 5/10/20/30/50/60 ml syringes of any brand","Human-voice alarm system for malfunctions","Three-level occlusion (high / medium / low) + KVO","Freely stackable for multi-solution therapy"],"specs":{"Syringe":"5–60 ml","Rate":"0.1–1500 ml/h","Accuracy":"±3%","KVO":"0.1–5 ml/h","Battery":"Li, 4 h backup","Weight":"2.2 kg"},"certs":["FDA","CE"]},{"id":"infusion-pump","cat":"infusion","name":"Volumetric Infusion Pump","subtitle":"Accurate fluid delivery for any IV set","image":"infusion_bys820.jpg","models":["BYS-820","CMS-SP750"],"tags":["1–1200 ml/h","Air-bubble detect","KVO"],"features":["HD LCD, compatible with any brand of infusion set","Ultrasonic air-bubble detection & occlusion alarms","Three-level occlusion with human-voice alarm","Anti-Bolus System prevents high-dose injection","AC/DC with Li battery & records last infusion settings"],"specs":{"Rate":"1–1200 ml/h","Accuracy":"±5%","Occlusion":"3 levels","KVO":"1–5 ml/h","Protection":"IPX1–IPX4","Weight":"1.8 kg"},"certs":["FDA","CE"]},{"id":"fluid-warmer","cat":"infusion","name":"IV / Blood Fluid Warmer","subtitle":"In-line warming for IV fluids & blood","image":null,"models":["VD-FW101"],"tags":["35–42 °C","Portable","5 alarms"],"features":["Accurate temperature control for IV fluids & blood","35–42 °C adjustable range, LED display","Three heating-groove lengths (25/31/52 cm)","Over-temperature protection with five alarms","Mounts on IV stand with bracket, no training needed"],"specs":{"Temp setting":"35–42 °C","Accuracy":"±1 °C","Warm-up":"≤2 min","Overheat cut-off":"46 °C","Power":"AC 100–240 V","Weight":"0.2–0.4 kg"},"certs":["FDA","CE"]},{"id":"dvt-pump","cat":"infusion","name":"DVT Compression Pump","subtitle":"Intermittent compression for thrombosis prevention","image":null,"models":["Devon Cirona 6200","KOLENO900"],"tags":["DVT prophylaxis","Calf/Thigh","Portable"],"features":["Intermittent pneumatic compression to prevent blood clots","Customizable for one or both legs, calf & thigh garments","Smart cable management reduces wire & hose clutter","Visual alarms for easy fault finding","Affordable for clinics, nursing homes & homecare"],"specs":{"Pressure":"40 mmHg","Inflation cycle":"12 s","Rest period":"48 s","Weight":"5.1 lbs","Battery":"Li 10.8 V, 4400 mAh"},"certs":["FDA","CE"]},{"id":"defib","cat":"emergency","name":"Biphasic Defibrillator","subtitle":"Manual & AED defibrillators with monitor","image":"defib_vddf.jpg","featured":true,"models":["VD-DF201","VD-DF301","VD-DF401","BPL DF 2617 AED R","DF-KIO-MED-270j","BPL DF-2509R"],"tags":["2–360 J","Manual + AED","Pacer-ready"],"features":["7\" colour TFT with ECG display & printer/recorder","Biphasic truncated exponential, 2–360 J in 15 steps","Manual, AED & synchronized cardioversion modes","Optional SpO2, NIBP, pacemaker & EtCO2","24-hour graphical/tabular trend of ECG, SpO2, NIBP, EtCO2"],"specs":{"Energy":"2–360 J","Waveform":"Biphasic truncated exp.","Charge time":"<7 s","Display":"7\" colour TFT","Battery":"11.1 V Li, 3 h monitor","Weight":"6.5 kg"},"certs":["FDA","CE"]},{"id":"aed","cat":"emergency","name":"Automated External Defibrillator (AED)","subtitle":"Two-button lifesaving defibrillation","image":"aed_mb7000.jpg","featured":true,"models":["M&B-AED7000"],"tags":["Biphasic","Voice prompts","Self-test"],"features":["Three-step, two-button operation with 20 audible prompts","Extensive voice & visual prompts for the operator","Weekly self-test to ensure readiness","Continuous event recording for reporting","Lock-out protection prevents inadvertent shock"],"specs":{"Energy sequence":"150 / 150 / 200 J","Analysis time":"9 s","Charge time":"8 s (150 J)","Battery":"12 V DC 3.0 Ah","Shelf life":"10 years"},"certs":["FDA","CE"]},{"id":"laryngoscope","cat":"emergency","name":"Video Laryngoscope","subtitle":"HD-guided intubation with recording","image":null,"models":["VD-VL100"],"tags":["3\" LCD","Rotatable","Recording"],"features":["3\" LCD rotatable 120° for flexible viewing","High-quality NTSC/PAL video with clear imaging","Loop & seamless video recording for real-time switching","Low-voltage alarm prevents unexpected shutdown","3 standard blades + 2 optional blades included"],"specs":{"Screen":"3\" LCD, 120° rotatable","Battery":"Li 3.7 V","Video":"NTSC / PAL","Blades":"3 standard + 2 optional"},"certs":["FDA","CE"]},{"id":"esu","cat":"surgical","name":"Electrosurgical Unit (Cautery)","subtitle":"Microprocessor monopolar & bipolar generators","image":null,"featured":true,"models":["VDBM-CM300","VDBM-CM400","VD-CM250","VD-CM400 PLUS","VD-Sparsh 400","VD-Monoseal Prime","VD-Excel Sealer","VD-Crown","VD-URO BITUR","ANALOG VD-SSE-300","ANALOG VD-SSE-TUR"],"tags":["Monopolar","Bipolar","Vessel sealing"],"features":["Microprocessor-based electrosurgical generator","Monopolar (Cut & Coag) + Bipolar modes integrated","Feedback-controlled response for high precision & safety","Spray coagulation for excellent hemostasis","For micro-surgery, laparoscopy & neurosurgery"],"specs":{"Cut power":"up to 400 W","Coag power":"120–150 W","Bipolar":"80–100 W","Frequency":"480 kHz","Display":"7-segment LED / digital","Weight":"4 kg"},"certs":["FDA","CE"]},{"id":"ot-table","cat":"surgical","name":"Operating Table (OT Table)","subtitle":"Multi-position surgical operating table","image":null,"models":["OT Table"],"tags":["Electro-hydraulic","Radiolucent","Multi-position"],"features":["Multiple articulated sections for all surgical positions","Electro-hydraulic height, tilt & trend adjustment","Radiolucent top for C-arm imaging","Detachable head & leg plates with accessory rails","Stable base with locking castors"],"specs":{"Type":"Electro-hydraulic","Movements":"Height, tilt, trend, flex","Top":"Radiolucent, sectional"},"certs":["FDA","CE"]},{"id":"ot-light","cat":"surgical","name":"OT & Spot Light","subtitle":"LED surgical & examination lighting","image":"otlight.jpg","featured":true,"models":["Ceiling / Mobile OT Light","Mobile Spot Light"],"tags":["LED","Shadowless","Mobile"],"features":["High-intensity shadowless LED surgical illumination","Mobile floor-stand & ceiling-mount options","Flexible gooseneck spot light for examination","Cool, true-colour light for accurate tissue rendering","Smooth-rolling 5-castor base"],"specs":{"Source":"LED","Mount":"Mobile / ceiling","Use":"OT & examination"},"certs":["FDA","CE"]},{"id":"endo-camera","cat":"surgical","name":"HD Endoscopy Camera & Light Source","subtitle":"Full-HD imaging chain for endoscopy","image":null,"models":["VD-Full HD Camera","VD-Light Source"],"tags":["Full HD","LED source","Endoscopy"],"features":["Full-HD endoscopy camera with crisp imaging","High-output LED cold light source","Compatible with rigid & flexible scopes","Front-panel controls with white-balance","Clear visualization for MIS procedures"],"specs":{"Camera":"Full HD","Light":"LED cold source","Use":"Laparoscopy / endoscopy"},"certs":["FDA","CE"]},{"id":"tourniquet","cat":"surgical","name":"Digital Tourniquet","subtitle":"Automatic pneumatic limb tourniquet","image":null,"models":["VD-DT01 (single)","VD-DT02 (dual channel)"],"tags":["50–400 mmHg","Dual channel","Autoclavable cuffs"],"features":["Fully automatic microcontroller-based smart control","Single or dual independent channels (DT02)","Auto pressure calibration & battery-level indication","Alarms for pressure leak, elapsed time & low battery","Autoclavable silicone cuffs in multiple sizes"],"specs":{"Pressure":"50–400 mmHg","Timer":"1 min–5 h","Accuracy":"±3 mmHg","Battery":"7 h backup","Display":"16×2 backlit LCD","Weight":"1.3–1.85 kg"},"certs":["FDA","CE"]},{"id":"fetal-monitor","cat":"maternal","name":"Fetal Monitor (CTG)","subtitle":"Antepartum FHR, UC & FM monitoring","image":"fetal_cms800g.jpg","featured":true,"models":["Contec CMS-800G","Bistos BT-350"],"tags":["FHR","TOCO","Twins"],"features":["Colour LCD, 60° convertible screen with clear curves","FHR normal-range marking (120–160 bpm) & abnormal alarm","Real-time 24-hour monitoring with 12-hour playback","Optional twins monitoring & high-resolution printer","Central Monitoring System connectivity"],"specs":{"FHR range":"50–240 bpm","Accuracy":"±2 bpm","TOCO":"0–100%","Probe":"1.0 MHz, 9-crystal","Print":"112 mm thermal","Weight":"≈3 kg"},"certs":["FDA","CE"]},{"id":"fetal-doppler","cat":"maternal","name":"Fetal Doppler","subtitle":"Pocket & tabletop FHR detection","image":null,"models":["VCOMIN-FD-530D","VCOMIN-FD-200C","VCOMIN-FD-300D","VCOMIN-FD-300C","BPL-FD-01","BPL-FD-9714"],"tags":["2–2.5 MHz","Colour LCD","Rechargeable"],"features":["High-fidelity, crystal-clear fetal heart sound","High-sensitivity waterproof Doppler probe","Colour / touch LCD with FHR display","USB data transfer & FHR curve storage/playback","Rechargeable battery with earphone & speaker"],"specs":{"Ultrasound":"2–2.5 MHz","FHR range":"50–240 bpm","Resolution":"1 bpm","Accuracy":"±2 bpm","Power":"Rechargeable / alkaline"},"certs":["FDA","CE"]},{"id":"warmer","cat":"maternal","name":"Infant Radiant Warmer","subtitle":"Servo-controlled neonatal warming","image":"warmer_ambw01.jpg","featured":true,"models":["AM-BW01 (Skin probe)","VD-BW02 (Skin + air)","VD-ST"],"tags":["Servo control","Apgar timer","Phototherapy-ready"],"features":["Advanced servo & air control modes with one-touch use","Focussed reflector heater for even heat distribution","Skin temperature on 1\" bright red LED display","10-step heater output, programmable power & time","Apgar timer / attend-baby alarm"],"specs":{"Modes":"Skin / Air / Manual","Temp range":"25–39 °C","Heater":"600–800 W","Power":"230 V AC","Trolley":"Fixed / movable"},"certs":["FDA","CE"]},{"id":"phototherapy","cat":"maternal","name":"LED Phototherapy Unit","subtitle":"High-intensity neonatal jaundice therapy","image":null,"models":["VD-SPT"],"tags":["LED","Overhead","Mobile"],"features":["Power LED phototherapy for neonatal hyperbilirubinemia","High-intensity blue light with uniform irradiance","Height-adjustable overhead unit on mobile stand","Long-life LEDs with low heat generation","Tiered cradle design for infant comfort"],"specs":{"Source":"Power LED (blue)","Mount":"Mobile overhead","Use":"Neonatal jaundice"},"certs":["FDA","CE"]},{"id":"jaundice","cat":"maternal","name":"Transcutaneous Jaundice Detector","subtitle":"Non-invasive neonatal bilirubin screening","image":null,"models":["VD-JD15","VD-JD"],"tags":["Non-invasive","<12 s","Memory 20"],"features":["Non-invasive transcutaneous bilirubin measurement","Results in <12 seconds — no blood sampling","Fiber-optics & spectrum-splitter optical design","LCD display, self-calibration & 20-record memory","Low energy use with long service life"],"specs":{"Range":"0.0–30.0 mg/dL","Prep time":"<12 s","Reexam rate":"<10%","Power":"2× AA","Weight":"215 g"},"certs":["FDA","CE"]},{"id":"thermometer","cat":"poc","name":"Non-Contact Infrared Thermometer","subtitle":"Touch-free forehead temperature screening","image":"thermo_yt1c.jpg","featured":true,"models":["Yuwell-YT1C"],"tags":["Non-contact","°C/°F","Fever alert"],"features":["Infrared reading with no physical contact","Beep, vibration & yellow alert for high temperature","Safe for newborns, children & adults","LCD display, switchable °C / °F","Auto shut-off to conserve battery"],"specs":{"Range":"32.0–42.9 °C","Accuracy":"±0.2 °C","Distance":"0–5 cm","Auto-off":"30 s","Power":"2× AAA","Certification":"ISO13485 / CE"},"certs":["CE"]},{"id":"vein-finder","cat":"poc","name":"Infrared Vein Finder","subtitle":"Real-time 3D vein visualization","image":"vein_ivf05.jpg","featured":true,"models":["VD-IVF05"],"tags":["3D display","HD imaging","Mobile cart"],"features":["Helps clinicians find veins in real time","Vein depth shown via 3D full-colour display","HD microvascular imaging on an FPGA platform","3 imaging modes for different skin colours","360° rotating wheels & 4-hour battery operation"],"specs":{"Projection distance":"29–31 cm","Wavelength":"750–980 nm","Illuminance":"300–1000 lux","Power":"Rechargeable Li-ion","Use":"Palms, arms, feet, forehead"},"certs":["FDA","CE"]}]};

/* ============ BRANDS ============ */
// Brands with a `logo` are the partner brands from the company profile (img/brands/).
// The rest appear in the product catalogue and are shown as text.
const BRANDS = [
  {id:'schiller', name:'Schiller', logo:'schiller.png'},
  {id:'drager', name:'Dräger', logo:'drager.png'},
  {id:'getinge', name:'Getinge', logo:'getinge.png'},
  {id:'bpl', name:'BPL', logo:'bpl.png'},
  {id:'philips', name:'Philips', logo:'philips.png'},
  {id:'stryker', name:'Stryker', logo:'stryker.png'},
  {id:'ge-healthcare', name:'GE Healthcare', logo:'ge-healthcare.png'},
  {id:'medtronic', name:'Medtronic', logo:'medtronic.png'},
  {id:'contec', name:'Contec', logo:'contec.png'},
  {id:'erba', name:'Erba Diagnostics', logo:'erba.png'},
  {id:'leica', name:'Leica', logo:'leica.png'},
  {id:'molbio', name:'Molbio', logo:'molbio.png'},
  {id:'olympus', name:'Olympus', logo:'olympus.png'},
  {id:'appaswamy', name:'Appaswamy', logo:'appaswamy.png'},
  {id:'morbos', name:'Morbos', logo:'morbos.png'},
  {id:'marken', name:'MarkEn', logo:'marken.png'},
  {id:'mindray', name:'Mindray', logo:'mindray.png'},
  {id:'fujifilm', name:'Fujifilm', logo:'fujifilm.png'},
  {id:'allengers', name:'Allengers', logo:'allengers.png'},
  {id:'hamilton', name:'Hamilton Medical', logo:'hamilton.png'},
  {id:'prognosys', name:'Prognosys', logo:'prognosys.png'},
  {id:'fresenius', name:'Fresenius', logo:'fresenius.png'},
  {id:'yuwell', name:'Yuwell'},
  {id:'bmc', name:'BMC'},
  {id:'bionet', name:'Bionet'},
  {id:'bistos', name:'Bistos'},
  {id:'vcomin', name:'VCOMIN'},
  {id:'comen', name:'COMEN'},
  {id:'edan', name:'EDAN'},
  {id:'hwatime', name:'Hwatime'},
  {id:'yonker', name:'Yonker'},
  {id:'ventmed', name:'Ventmed'},
  {id:'devon', name:'Devon'},
];
// Brand of each model. Models not listed here are grouped under "Other brands".
const MODEL_BRAND = {};
[
  ['contec', ['CMS6000','Contec CMS7000','Contec CMS8000','Contec CMS9000','CMS-70A','CMS5100','CMS-60C','CMS60D1','CMS50D Pro','CMS50D','CMS-ABPM50','Contec CA10S (Sidestream)','Contec CA10M (Mainstream)','CMS100G','CMS300G','CMS300GA','CMS600G','CMS1200G','CMS-TLC6000 (48 h)','CMS-TLC5000 (24 h)','CMS-SP80B','CMS-SP10','CMS-SP950','CMS-SP750','Contec CMS-800G']],
  ['mindray', ['Mindray ePM12','Mindray PM60']],
  ['bpl', ['BPL Ultima-Prime-D','BPL Smart-Oxy','Genx-3','CARDIART-6208-View','Cardiart-9108','CARDIART-9108-D','BPL DF 2617 AED R','BPL DF-2509R','BPL-FD-01','BPL-FD-9714']],
  ['philips', ['Philips Goldway GS20','Philips BiPAP DreamStation']],
  ['schiller', ['Schiller Truscope-III']],
  ['medtronic', ['Nellcor PM10N','Covidien Nellcor PM-100']],
  ['bionet', ['Bionet Oxy9wave','CardioCare2000','Cardio7']],
  ['bistos', ['Bistos BT-200V','Bistos BT-350']],
  ['vcomin', ['VCOMIN-VD-320','VCOMIN-FD-530D','VCOMIN-FD-200C','VCOMIN-FD-300D','VCOMIN-FD-300C']],
  ['bmc', ['BMC RESmart BiPAP Y-30T','BMC Auto CPAP G2','BMC Auto CPAP G2S A20','BMC Auto CPAP G3 A20','BMC M1 Mini Auto CPAP','BMC H-80 Series (H80AS / H80A / H80M)','BMC PolyWatch YH-600 B Pro']],
  ['yuwell', ['Yuwell Auto BiPAP YH-830','Yuwell Auto CPAP YH550','Yuwell 402AI','Yuwell 7A-23B','Yuwell 7A-23D','Yuwell 7E-A/B','Yuwell 7B Pedal Suction','Yuwell-YT1C']],
  ['comen', ['COMEN STAR8000E']],
  ['edan', ['EDAN-X12']],
  ['hwatime', ['Hwatime XM-750']],
  ['yonker', ['Yonker YK-8000C']],
  ['ventmed', ['Ventmed Bipap Ds8 St30']],
  ['devon', ['Devon Cirona 6200']],
].forEach(([b, models]) => models.forEach(m => { MODEL_BRAND[m] = b; }));

function brandMeta(id){return BRANDS.find(b=>b.id===id);}
function modelBrand(m){return MODEL_BRAND[m]||null;}
function modelLabel(m){
  const b=brandMeta(modelBrand(m));
  // don't repeat the brand when the model name already contains it ("BPL Smart-Oxy")
  if(!b||m.toLowerCase().includes(b.name.split(' ')[0].toLowerCase()))return m;
  return `${m} (${b.name})`;
}
function productBrands(p){return [...new Set(p.models.map(modelBrand).filter(Boolean))];}
function productHasBrand(p,bid){
  if(bid==='all')return true;
  if(bid==='other')return p.models.some(m=>!modelBrand(m));
  return p.models.some(m=>modelBrand(m)===bid);
}
function modelsForBrand(p,bid){
  if(bid==='all')return p.models;
  return p.models.filter(m=>bid==='other'?!modelBrand(m):modelBrand(m)===bid);
}
function brandProductCount(bid){return DATA.products.filter(p=>productHasBrand(p,bid)).length;}

/* ============ ICONS ============ */
const IC = {
 monitor:'<path d="M3 4h18v12H3z"/><path d="M8 20h8M12 16v4"/><path d="M6 10l2.5-3 2 4 2.5-5 2 4H18"/>',
 heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"/><path d="M5 12h3l1.5-3 2 5 1.5-2h3"/>',
 lung:'<path d="M12 4v8"/><path d="M12 8c0 5-3 4-3 8 0 2-1 3-3 3s-3-2-3-4c0-5 3-7 5-8 2-1 4-1 4 1z"/><path d="M12 8c0 5 3 4 3 8 0 2 1 3 3 3s3-2 3-4c0-5-3-7-5-8-2-1-4-1-4 1z"/>',
 drop:'<path d="M12 3c3 4 6 7 6 11a6 6 0 01-12 0c0-4 3-7 6-11z"/><path d="M9 14a3 3 0 003 3"/>',
 bolt:'<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',
 scalpel:'<path d="M20 4L9 15l-3 .8.8-3L18 2z"/><path d="M6 15l-3 6 6-3"/>',
 baby:'<circle cx="12" cy="8" r="4"/><path d="M8 7h.01M16 7h.01M10 10a3 3 0 004 0"/><path d="M5 21c1-4 4-6 7-6s6 2 7 6"/>',
 pulse:'<path d="M3 12h4l2-6 4 12 2-6h6"/>',
 check:'<path d="M20 6L9 17l-5-5"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
 bolt2:'<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',
 users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M16 5a3 3 0 010 6M22 20c0-2.5-2-4-4-4.5"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
 tag:'<path d="M3 3h8l9 9-8 8-9-9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
 chat:'<path d="M21 12a8 8 0 01-11.6 7L3 21l1.9-6.3A8 8 0 1121 12z"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 minus:'<path d="M5 12h14"/>',
 cart:'<path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/>',
 send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-2 7 5.5-3 5.5 3-2-7"/>',
 building:'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 whatsapp:'<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',
};
function icon(n,cls){if(n==='whatsapp')cls=(cls?cls+' ':'')+'wa-ico';return '<svg class="svgi '+(cls||'')+'" viewBox="0 0 24 24">'+(IC[n]||IC.monitor)+'</svg>';}

/* category accent colors for icon-cards */
const CATCOLOR={monitoring:['#0b4699','#2f7fd1'],cardiology:['#0a3f88','#3f8ad6'],
 respiratory:['#0d52a8','#4a90d9'],infusion:['#0a4291','#2d79c8'],emergency:['#0b3c84','#3a86cf'],
 surgical:['#083a7e','#2f7fd1'],maternal:['#104f9c','#4f94db'],poc:['#0a4696','#357fce']};
function catMeta(id){return DATA.categories.find(c=>c.id===id)||{};}

/* ============ STATE ============ */
let cart = loadCart();
let catFilter='all', brandFilter='all', catQuery='', globalQuery='';

function loadCart(){
  try{
    const raw = JSON.parse(localStorage.getItem('inquis_cart')||'[]');
    if (!Array.isArray(raw)) return [];
    const out = [];
    raw.forEach(c => {
      if (!c || !c.id) return;
      const p = DATA.products.find(x => x.id === c.id);
      if (!p) return;
      // Drop models that no longer exist in the catalog, and merge duplicate lines
      const model = p.models.includes(c.model) ? c.model : p.models[0];
      const qty = Math.max(1, parseInt(c.qty) || 1);
      const existing = out.find(x => x.id === c.id && x.model === model);
      if (existing) { existing.qty += qty; return; }
      out.push({ uid: c.uid || newUid(), id: c.id, model, qty });
    });
    return out;
  }catch(e){return[]}
}
function newUid(){return 'item_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);}
function saveCart(){try{localStorage.setItem('inquis_cart',JSON.stringify(cart))}catch(e){}}

function unlockScrollIfNeeded(){
  const modalOpen = document.getElementById('prodOverlay')?.classList.contains('open');
  const drawerOpen = document.getElementById('drawer')?.classList.contains('open');
  const mobNavOpen = document.getElementById('mobNav')?.classList.contains('open');
  if (!modalOpen && !drawerOpen && !mobNavOpen && document.body) {
    document.body.style.overflow = '';
  }
}

/* ============ SEO & VIEW CONFIG ============ */
const VIEW_SEO = {
  home: {
    title: 'Inquis Life Care Sciences — Medical Equipment, Accessories & Consumables | Hyderabad, India',
    desc: 'Inquis Life Care Sciences LLP is an authorized distributor of hospital & medical equipment across India. Patient monitors, 12-lead ECG machines, defibrillators, BiPAP ventilators, OT lights, and neonatal care in Hyderabad, Telangana.'
  },
  catalog: {
    title: 'Medical Equipment Catalog & Hospital Supplies | Inquis Life Care Sciences',
    desc: 'Browse our complete catalog of 36+ hospital medical devices across 8 categories: ICU patient monitors, ECG machines, BiPAP/CPAP ventilators, defibrillators, surgical ESU, and neonatal equipment.'
  },
  about: {
    title: 'About Us — Inquis Life Care Sciences | Healthcare Technology Partner',
    desc: 'Inquis Life Care Sciences is an authorized distributor and partner delivering high-quality, certified medical technologies to hospitals pan-India.'
  },
  contact: {
    title: 'Contact Us & Request a Quote — Inquis Life Care Sciences | Hyderabad',
    desc: 'Get in touch with Inquis Life Care Sciences for medical equipment quotes, product demos, and after-sales service. Reach our office in Balkampet, Hyderabad.'
  }
};

function updateViewSEO(view){
  const meta = VIEW_SEO[view] || VIEW_SEO.home;
  document.title = meta.title;
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', meta.desc);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.desc);
}

/* ============ NAV / ROUTER ============ */
function go(view, pushHistory = true){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const target = document.getElementById('view-'+view);
  if (target) target.classList.add('active');
  document.querySelectorAll('nav.main a').forEach(a=>a.classList.toggle('active',a.dataset.nav===view));
  // 'instant' overrides the page's CSS scroll-behavior:smooth; very old browsers throw on it
  try { window.scrollTo({top:0,behavior:'instant'}); } catch(e) { window.scrollTo(0,0); }
  if(view==='catalog')renderCatalog();
  setTimeout(observeReveals,50);
  if (pushHistory && location.hash !== '#'+view) {
    history.pushState(null,'','#'+view);
  }
  updateViewSEO(view);
}
function currentView(){
  const v=document.querySelector('.view.active');
  return v ? v.id.replace('view-','') : 'home';
}
function scrollToId(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}

/* ============ RENDER HOME ============ */
function buildHome(){
  // hero art
  const art=document.getElementById('heroArt');
  // rotating product showcase: every product that has a photo, one at a time
  const slides=DATA.products.filter(p=>p.image);
  art.innerHTML=`
   <div class="hero-slider" id="heroSlider" aria-roledescription="carousel" aria-label="Featured equipment">
     ${slides.map((p,i)=>`<figure class="hs-slide${i===0?' active':''}" role="group" aria-roledescription="slide" aria-label="${p.name}" aria-hidden="${i!==0}" onclick="openModal('${p.id}')">
       <img src="img/${p.image}" alt="${p.name}"${i>0?' loading="lazy"':''}>
       <figcaption>${icon(catMeta(p.cat).icon)}<span>${p.name}</span></figcaption></figure>`).join('')}
     <div class="hero-badge"><div class="ico">${icon('shield')}</div><div><b>FDA · CE</b><span>Certified range</span></div></div>
   </div>
   <div class="hs-dots" role="tablist" aria-label="Choose product">
     ${slides.map((p,i)=>`<button class="hs-dot${i===0?' active':''}" role="tab" aria-label="${p.name}" aria-selected="${i===0}" onclick="heroGo(${i},true)"></button>`).join('')}
   </div>`;
  startHeroSlider();
  // hero bg dots pattern
  document.getElementById('heroBg').innerHTML=bgPattern(1.1);
  document.querySelectorAll('.catalog-head .hero-bg,.page-head .hero-bg').forEach(e=>e.innerHTML=bgPattern(.42));
  fillEcgStrips();

  // categories
  document.getElementById('catGrid').innerHTML=DATA.categories.map((c,i)=>{
    const n=DATA.products.filter(p=>p.cat===c.id).length;
    return `<div class="cat-tile reveal ${'d'+(i%4)}" onclick="openCategory('${c.id}')">
      <div class="cat-ico">${icon(c.icon)}</div>
      <h3>${c.name}</h3><p>${c.blurb}</p>
      <div class="cat-link">${n} products ${icon('arrow')}</div></div>`;
  }).join('');

  // featured
  const feat=DATA.products.filter(p=>p.featured).slice(0,8);
  document.getElementById('featGrid').innerHTML=feat.map((p,i)=>cardHTML(p,i)).join('');

  // brand logos (click opens that brand's catalogue)
  const countLabel=n=>n>0?`${n} product${n>1?'s':''}`:'On request';
  document.getElementById('brandGrid').innerHTML=BRANDS.filter(b=>b.logo).map((b,i)=>
    `<a class="brand-logo reveal ${'d'+(i%4)}" href="#brand/${b.id}" onclick="openBrand('${b.id}');return false;" aria-label="${b.name} products">
      <img src="img/brands/${b.logo}" alt="${b.name}" loading="lazy"><span class="bl-count">${countLabel(brandProductCount(b.id))}</span></a>`).join('');
  document.getElementById('brandMore').innerHTML='<span class="bm-lbl">Also in our catalogue:</span>'+
    BRANDS.filter(b=>!b.logo&&brandProductCount(b.id)>0).map(b=>
    `<a class="brand-chip" href="#brand/${b.id}" onclick="openBrand('${b.id}');return false;">${b.name} <span>${brandProductCount(b.id)}</span></a>`).join('');

  // why
  const why=[
    ['users','Experienced Team','A dedicated team driven by a shared purpose to redefine healthcare.'],
    ['bolt2','High-End Technology','State-of-the-art medical devices and high-quality equipment.'],
    ['globe','Strong Network','Serving hospitals, clinics and healthcare institutions pan-India.'],
    ['tag','Competitive Pricing','World-class equipment at the right value for every project.'],
    ['chat','Dedicated Support','Customer support before, during and after delivery.'],
    ['gear','Seamless Execution','Helping clients create world-class healthcare facilities.'],
  ];
  document.getElementById('whyGrid').innerHTML=why.map((w,i)=>
    `<div class="why-card reveal ${'d'+(i%3)}"><div class="why-ico">${icon(w[0])}</div><h3>${w[1]}</h3><p>${w[2]}</p></div>`).join('');

  // footer categories
  document.getElementById('footerCats').innerHTML='<h4>Categories</h4>'+DATA.categories.map(c=>
    `<a href="#catalog/${c.id}" onclick="openCategory('${c.id}');return false;">${c.name}</a>`).join('');
}
/* ============ HERO SLIDER ============ */
let heroIdx=0, heroTimer=null;
const HERO_INTERVAL=3500;
function heroGo(i,manual){
  const slides=document.querySelectorAll('#heroSlider .hs-slide');
  const dots=document.querySelectorAll('.hs-dots .hs-dot');
  if(!slides.length)return;
  heroIdx=(i+slides.length)%slides.length;
  slides.forEach((el,k)=>{el.classList.toggle('active',k===heroIdx);el.setAttribute('aria-hidden',k!==heroIdx);});
  dots.forEach((el,k)=>{el.classList.toggle('active',k===heroIdx);el.setAttribute('aria-selected',k===heroIdx);});
  if(manual)startHeroSlider(); // restart the timer after a manual pick
}
function startHeroSlider(){
  clearInterval(heroTimer);
  heroTimer=setInterval(()=>{
    // only advance while the home page is visible
    if(!document.hidden&&currentView()==='home')heroGo(heroIdx+1);
  },HERO_INTERVAL);
  const el=document.getElementById('heroSlider');
  if(el&&!el.dataset.bound){
    el.dataset.bound='1';
    el.addEventListener('mouseenter',()=>clearInterval(heroTimer));
    el.addEventListener('mouseleave',()=>startHeroSlider());
  }
}

/* Blue-section backgrounds: soft dot grid + a heartbeat (ECG) line along the bottom edge.
   The ECG strip is drawn in real pixels (no viewBox scaling), so it keeps its shape and
   stays pinned to the bottom whatever the section's height. `amp` scales the beat height. */
let bgPatternN=0;
function bgPattern(amp=1){
  const id='bgdots'+(bgPatternN++); // unique per SVG: used in several sections
  let s='<svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">';
  s+=`<defs><pattern id="${id}" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="rgba(255,255,255,.16)"/></pattern></defs>`;
  s+=`<rect width="1200" height="600" fill="url(#${id})"/></svg>`;
  return s+`<div class="ecg-bg">${ecgStrip(amp)}</div>`;
}
function ecgStrip(amp=1){
  const a=v=>+(v*amp).toFixed(1);
  // one heartbeat = 300px wide; rises 66*amp above and dips 30*amp below the baseline
  const beat=`h80 l10 ${a(-16)} l10 ${a(16)} h20 l8 ${a(20)} l10 ${a(-86)} l10 ${a(96)} l8 ${a(-30)} h30 l16 ${a(-14)} l16 ${a(14)} h82`;
  const h=Math.ceil(96*amp)+10, base=Math.ceil(66*amp)+5;
  const d=`M-12 ${base} `+Array(9).fill(beat).join(' ');
  return `<svg width="100%" height="${h}" fill="none" aria-hidden="true">
    <path d="${d}" stroke="rgba(162,196,234,.34)" stroke-width="2" stroke-linejoin="round"/>
    <path class="ecg-pulse" d="${d}" pathLength="1000" stroke="rgba(143,192,245,.9)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}
/* Fill static <div class="ecg-bg" data-amp=".."> placeholders (CTA band, footer, mission card) */
function fillEcgStrips(){
  document.querySelectorAll('.ecg-bg[data-amp]').forEach(el=>{el.innerHTML=ecgStrip(parseFloat(el.dataset.amp)||1);});
}

/* ============ CARD ============ */
function cardHTML(p,i,brand='all'){
  const cat=catMeta(p.cat);
  // In a brand view, show/add that brand's model instead of the product's first model
  const shownModel=modelsForBrand(p,brand)[0]||p.models[0];
  const brandNames=productBrands(p).map(b=>brandMeta(b).name);
  const brandLine=brandNames.length?`<div class="card-brands">${icon('award')}${brandNames.slice(0,3).join(' · ')}${brandNames.length>3?` +${brandNames.length-3}`:''}</div>`:'';
  const nModels=p.models.length;
  const tags=(p.tags||[]).slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('');
  let media;
  if(p.image){
    media=`<div class="card-media"><img src="img/${p.image}" alt="${p.name}" loading="lazy">
      <span class="media-model">${shownModel}</span></div>`;
  }else{
    const col=CATCOLOR[p.cat]||['#0b4699','#2f7fd1'];
    media=`<div class="card-media icon-media" style="--mediabg:linear-gradient(150deg,${col[0]},${col[1]})">
      <span class="card-ico">${icon(cat.icon)}</span><span class="media-model">${shownModel}</span></div>`;
  }
  const cert=(p.certs||[]).map(c=>`<span class="chip-cert">${c}</span>`).join('');
  const btn=cardBtnState(p.id);
  return `<div class="card reveal ${'d'+(i%4)} ${p.featured?'featured-ribbon':''}" role="button" tabindex="0" aria-label="View ${p.name} details" onclick="openModal('${p.id}')" onkeydown="if(event.target===this&&(event.key==='Enter'||event.key===' ')){event.preventDefault();openModal('${p.id}');}">
    ${media}<div class="card-cert">${cert}</div>
    <div class="card-body">
      <div class="card-cat">${cat.name}</div>
      <h3>${p.name}</h3>
      ${brandLine}
      <div class="csub">${p.subtitle}</div>
      <div class="card-tags">${tags}</div>
      <div class="card-foot">
        <span class="models-n">${nModels} model${nModels>1?'s':''}</span>
        <button class="${btn.cls}" data-prod-id="${p.id}" onclick="event.stopPropagation();addToCart('${p.id}','${shownModel}')">${btn.html}</button>
      </div>
    </div></div>`;
}

/* ============ CATALOG ============ */
function buildFilters(){
  const total=DATA.products.length;
  let h=`<button type="button" class="filt-item ${catFilter==='all'?'active':''}" aria-pressed="${catFilter==='all'}" onclick="setCat('all')"><span>All Products</span><span class="fn">${total}</span></button>`;
  h+=DATA.categories.map(c=>{
    const n=DATA.products.filter(p=>p.cat===c.id).length;
    return `<button type="button" class="filt-item ${catFilter===c.id?'active':''}" aria-pressed="${catFilter===c.id}" onclick="setCat('${c.id}')"><span>${c.name}</span><span class="fn">${n}</span></button>`;
  }).join('');
  document.getElementById('filterList').innerHTML=h;
  // brand filter: brands that have products, then models without a listed brand
  const withProducts=BRANDS.filter(b=>brandProductCount(b.id)>0).sort((a,b)=>a.name.localeCompare(b.name));
  let bh=`<button type="button" class="filt-item ${brandFilter==='all'?'active':''}" aria-pressed="${brandFilter==='all'}" onclick="setBrand('all')"><span>All Brands</span></button>`;
  bh+=withProducts.map(b=>`<button type="button" class="filt-item ${brandFilter===b.id?'active':''}" aria-pressed="${brandFilter===b.id}" onclick="setBrand('${b.id}')"><span>${b.name}</span><span class="fn">${brandProductCount(b.id)}</span></button>`).join('');
  bh+=`<button type="button" class="filt-item ${brandFilter==='other'?'active':''}" aria-pressed="${brandFilter==='other'}" onclick="setBrand('other')"><span>Other brands</span><span class="fn">${brandProductCount('other')}</span></button>`;
  // a logo brand with no listed products is still shown as selected when opened from the home page
  if(brandFilter!=='all'&&brandFilter!=='other'&&!withProducts.some(b=>b.id===brandFilter)){
    const b=brandMeta(brandFilter); if(b) bh+=`<button type="button" class="filt-item active" aria-pressed="true"><span>${b.name}</span><span class="fn">0</span></button>`;
  }
  document.getElementById('brandFilterList').innerHTML=bh;
}
function scrollToCatalogTop(){window.scrollTo({top:document.querySelector('.catalog-head').offsetHeight-20,behavior:'smooth'});}
function setCat(id){const f=filterHasFocus();catFilter=id;renderCatalog();if(f)refocusFilter('filterList',id);document.getElementById('filterPanel').classList.remove('mobopen');scrollToCatalogTop();}
function setBrand(id){const f=filterHasFocus();brandFilter=id;renderCatalog();if(f)refocusFilter('brandFilterList',id);document.getElementById('filterPanel').classList.remove('mobopen');scrollToCatalogTop();updateBrandSEO();}
// Filter buttons are re-rendered on every change; keep keyboard focus on the one just chosen
function filterHasFocus(){const a=document.activeElement;return !!(a&&a.closest&&a.closest('#filterPanel .filt-item'));}
function refocusFilter(listId,id){
  const btn=[...document.querySelectorAll('#'+listId+' .filt-item')].find(b=>(b.getAttribute('onclick')||'').includes(`'${id}'`));
  if(btn)btn.focus({preventScroll:true});
}
function clearSearch(){
  catQuery=globalQuery='';
  ['catSearch','globalSearch'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
}
/* Home-page entry points: show the full catalogue for one category / one brand */
function openCategory(id){
  brandFilter='all';clearSearch();
  go('catalog',false);
  if(location.hash!=='#catalog/'+id)history.pushState(null,'','#catalog/'+id);
  setCat(id);
}
function openBrand(id){
  catFilter='all';clearSearch();brandFilter=id;
  go('catalog',false);
  if(location.hash!=='#brand/'+id)history.pushState(null,'','#brand/'+id);
  setBrand(id);
}
function updateBrandSEO(){
  const b=brandMeta(brandFilter);
  if(b&&currentView()==='catalog'){
    document.title=`${b.name} Medical Equipment — Catalogue | Inquis Life Care Sciences`;
    const d=document.querySelector('meta[name="description"]');
    if(d)d.setAttribute('content',`${b.name} medical equipment supplied by Inquis Life Care Sciences, Hyderabad. Browse models and request a quote.`);
  }
}
function catSearchInput(v){catQuery=v.toLowerCase().trim();renderCatalog();}
function renderCatalog(){
  buildFilters();
  let list=DATA.products.slice();
  if(catFilter!=='all')list=list.filter(p=>p.cat===catFilter);
  if(brandFilter!=='all')list=list.filter(p=>productHasBrand(p,brandFilter));
  if(catQuery){
    list=list.filter(p=>(p.name+' '+p.subtitle+' '+p.models.join(' ')+' '+(p.tags||[]).join(' ')+' '+productBrands(p).map(b=>brandMeta(b).name).join(' ')).toLowerCase().includes(catQuery));
  }
  const sort=document.getElementById('sortSel').value;
  if(sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name));
  else if(sort==='za')list.sort((a,b)=>b.name.localeCompare(a.name));
  else if(sort==='cat')list.sort((a,b)=>a.cat.localeCompare(b.cat)||a.name.localeCompare(b.name));
  else list.sort((a,b)=>(b.featured?1:0)-(a.featured?1:0));
  document.getElementById('resCount').textContent=list.length;
  // active cat pill
  const wrap=document.getElementById('activeCatWrap');
  let pills='';
  if(catFilter!=='all'){const cm=catMeta(catFilter);
    pills+=`<span class="active-cat-pill">${cm.name}<button onclick="setCat('all')" aria-label="Clear category">${icon('x')}</button></span>`;}
  if(brandFilter!=='all'){const bm=brandMeta(brandFilter);
    pills+=`<span class="active-cat-pill">${bm?bm.name:'Other brands'}<button onclick="setBrand('all')" aria-label="Clear brand">${icon('x')}</button></span>`;}
  wrap.innerHTML=pills;
  // brand banner (logo + count) when browsing one brand
  const banner=document.getElementById('brandBanner');
  const bm=brandMeta(brandFilter);
  if(bm){
    const n=brandProductCount(bm.id);
    banner.innerHTML=`${bm.logo?`<img src="img/brands/${bm.logo}" alt="${bm.name}">`:`<b class="bb-name">${bm.name}</b>`}
      <div><b>${bm.name} equipment</b><span>${n?`${n} product line${n>1?'s':''} in our catalogue`:'Supplied on request'}</span></div>`;
    banner.style.display='flex';
  } else banner.style.display='none';
  const grid=document.getElementById('catalogGrid');
  const empty=document.getElementById('emptyState');
  if(list.length===0){
    grid.innerHTML='';empty.style.display='block';
    // A partner brand with nothing listed yet: offer an enquiry instead of a dead end
    if(bm&&brandProductCount(bm.id)===0){
      const wa='https://wa.me/918762666932?text='+encodeURIComponent(`Hi, I would like a quote for ${bm.name} equipment.`);
      empty.innerHTML=`${icon('award')}<h3>${bm.name} equipment is supplied on request</h3>
        <p>Tell us which ${bm.name} products you need and we'll send you a quote.</p>
        <div class="empty-actions"><a class="btn btn-wa" href="${wa}" target="_blank" rel="noopener">${icon('whatsapp')} Ask on WhatsApp</a>
        <button class="btn btn-add-lg" onclick="go('contact')">Contact us</button></div>`;
    } else {
      empty.innerHTML=`<svg class="svgi" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg><h3>No products found</h3><p>Try a different search term, category or brand.</p>`;
    }
  }
  else{empty.style.display='none';grid.innerHTML=list.map((p,i)=>cardHTML(p,i,brandFilter)).join('');}
  setTimeout(observeReveals,30);
}
function toggleFilters(){document.getElementById('filterPanel').classList.toggle('mobopen');}

/* ============ GLOBAL SEARCH ============ */
function toggleSearch(){const s=document.getElementById('searchBar');s.classList.toggle('open');if(s.classList.contains('open'))setTimeout(()=>document.getElementById('globalSearch').focus(),120);}
function globalSearchInput(v){
  globalQuery=v.toLowerCase().trim();
  const catInput = document.getElementById('catSearch');
  if(catInput) catInput.value = v;
  catQuery = globalQuery;
  // The header search covers the whole catalog, not just the selected category
  if(globalQuery.length > 0){ catFilter = 'all'; brandFilter = 'all'; }
  // Switch view (one history entry) only once; later keystrokes just re-filter
  if(globalQuery.length > 0 && currentView() !== 'catalog'){
    go('catalog');
  } else {
    renderCatalog();
  }
}
/* Apply a search term coming from a URL (#catalog?q=...) */
function applySearch(v){
  const gs=document.getElementById('globalSearch');if(gs)gs.value=v;
  const cs=document.getElementById('catSearch');if(cs)cs.value=v;
  globalQuery=catQuery=v.toLowerCase().trim();
  catFilter='all'; brandFilter='all';
}

/* ============ PRODUCT MODAL ============ */
let modalProd=null;
let modalPushed=false; // true when opening the modal added a #product/... history entry
function isModalOpen(){return document.getElementById('prodOverlay').classList.contains('open');}
function openModal(id, pushHistory = true){
  const p=DATA.products.find(x=>x.id===id);if(!p)return;modalProd=p;
  const cat=catMeta(p.cat);
  let media;
  if(p.image){media=`<div class="modal-media"><img src="img/${p.image}" alt="${p.name}"></div>`;}
  else{const col=CATCOLOR[p.cat]||['#0b4699','#2f7fd1'];
    media=`<div class="modal-media icon-media" style="--mediabg:linear-gradient(150deg,${col[0]},${col[1]})"><span class="big-ico">${icon(cat.icon)}</span></div>`;}
  const certs=(p.certs||[]).map(c=>`<span class="cert-badge">${icon('check')}${c} Certified</span>`).join('');
  const feats=(p.features||[]).map(f=>`<li>${icon('check')}<span>${f}</span></li>`).join('');
  const pBrands=productBrands(p).map(b=>brandMeta(b).name);
  const brandRow=pBrands.length?`<tr><td>Brand${pBrands.length>1?'s':''}</td><td>${pBrands.join(', ')}${p.models.some(m=>!modelBrand(m))?', others':''}</td></tr>`:'';
  const specs=brandRow+Object.entries(p.specs||{}).map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  const models=(p.models||[]).map(m=>modelChipHTML(p,m)).join('');
  // Pre-select the model of the brand being browsed
  const preferred=modelsForBrand(p,brandFilter)[0]||p.models[0];
  const modelPicker = (p.models.length > 1) ? `
    <div class="modal-model-picker">
      <label class="modal-picker-lbl">Select Model / Variant:</label>
      <select class="modal-model-sel" id="modalModelSel" onchange="updateModalBtn()">
        ${p.models.map(m => `<option value="${m}" ${m===preferred?'selected':''}>${modelLabel(m)}</option>`).join('')}
      </select>
    </div>` : '';
  document.getElementById('prodModal').innerHTML=`
    <button class="modal-close" onclick="closeModal()">${icon('x')}</button>
    <div class="modal-top">
      ${media}
      <div class="modal-info">
        <div class="mcat">${cat.name}</div>
        <h2>${p.name}</h2>
        <p class="msub">${p.subtitle}</p>
        <div class="cert-row">${certs}${pBrands.map(b=>`<span class="cert-badge">${icon('award')}${b}</span>`).join('')}</div>
        ${modelPicker}
        <div class="modal-actions">
          <button class="btn btn-add-lg" id="modalAddBtn" onclick="addModalProdToCart('${p.id}')">${icon('plus')} Add to Enquiry</button>
          <a class="btn btn-wa" id="modalQuoteBtn" href="#" target="_blank" rel="noopener">${icon('whatsapp')} Quick Quote</a>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="mtabs">
        <button class="mtab active" onclick="switchTab(event,'tab-feat')">Features</button>
        <button class="mtab" onclick="switchTab(event,'tab-spec')">Specifications</button>
        <button class="mtab" onclick="switchTab(event,'tab-model')">Models (${p.models.length})</button>
      </div>
      <div class="mtab-panel active" id="tab-feat"><ul class="feat-list">${feats}</ul></div>
      <div class="mtab-panel" id="tab-spec"><table class="spec-table">${specs}</table></div>
      <div class="mtab-panel" id="tab-model"><p style="color:var(--slate);font-size:14px;margin-bottom:14px">Available models &amp; variants — click any model to add to your enquiry:</p><div class="model-chips">${models}</div></div>
    </div>`;
  document.getElementById('prodOverlay').classList.add('open');
  if (document.body) document.body.style.overflow='hidden';
  // Update page title and URL hash for direct product sharing and indexing
  document.title = `${p.name} — Medical Equipment | Inquis Life Care Sciences`;
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', `${p.name} (${p.subtitle}). Models: ${p.models.join(', ')}. Certified: ${(p.certs||[]).join(', ')}. Inquis Life Care Sciences, Hyderabad.`);
  if (pushHistory) {
    history.pushState(null, '', '#product/' + p.id);
    modalPushed = true;
  }
  updateModalBtn();
}
function closeModal(updateHistory = true){
  if (!isModalOpen()) return; // e.g. Escape pressed with no modal open
  document.getElementById('prodOverlay').classList.remove('open');
  unlockScrollIfNeeded();
  const view = currentView();
  updateViewSEO(view);
  if (updateHistory) {
    if (modalPushed) {
      // Step back over the #product entry so Back doesn't reopen the modal
      history.back();
    } else {
      // Modal came from a direct #product link: just fix the URL
      history.replaceState(null, '', '#' + view);
    }
  }
  modalPushed = false;
}
function switchTab(e,id){
  e.currentTarget.parentElement.querySelectorAll('.mtab').forEach(t=>t.classList.remove('active'));
  e.currentTarget.classList.add('active');
  document.querySelectorAll('.mtab-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function updateModalBtn(){
  if (!modalProd) return;
  const btn = document.getElementById('modalAddBtn');
  if (btn) {
    const sel = document.getElementById('modalModelSel');
    const selectedModel = sel ? sel.value : modalProd.models[0];
    const inCart = cart.find(c => c.id === modalProd.id && c.model === selectedModel);
    const quote = document.getElementById('modalQuoteBtn');
    if (quote) quote.href = 'https://wa.me/918762666932?text=' + encodeURIComponent('Hi, I would like a quote for ' + modalProd.name + ' — ' + modelLabel(selectedModel) + '.');
    if (inCart) {
      btn.className = 'btn btn-add-lg in-cart';
      btn.innerHTML = `${icon('check')} In Enquiry (${inCart.qty} of ${selectedModel}) — Add More`;
    } else {
      btn.className = 'btn btn-add-lg';
      btn.innerHTML = `${icon('plus')} Add ${selectedModel} to Enquiry`;
    }
  }
  const tabModel = document.getElementById('tab-model');
  if (tabModel && modalProd.models) {
    const chipsEl = tabModel.querySelector('.model-chips');
    if (chipsEl) {
      chipsEl.innerHTML = modalProd.models.map(m => modelChipHTML(modalProd, m)).join('');
    }
  }
}
function modelChipHTML(p,m){
  const inCart=cart.find(c=>c.id===p.id&&c.model===m);
  const b=brandMeta(modelBrand(m));
  return `<div class="model-chip clickable" onclick="addToCart('${p.id}','${m}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();addToCart('${p.id}','${m}');}" role="button" tabindex="0" title="Click to add ${m} to enquiry">
      <span class="mchip-name">${icon('check')}${m}${b?`<span class="mchip-brand">${b.name}</span>`:''}</span>
      <span class="mchip-action">${inCart?`Added (${inCart.qty}) +`:`+ Add`}</span>
    </div>`;
}
function addModalProdToCart(id){
  const sel = document.getElementById('modalModelSel');
  const selectedModel = sel ? sel.value : null;
  addToCart(id, selectedModel);
}

/* Card button label: total quantity across all models of a product */
function cardBtnState(id){
  const items = cart.filter(c => c.id === id);
  const totalQty = items.reduce((s, c) => s + c.qty, 0);
  if (totalQty > 0) {
    return { cls: 'btn-add in-cart', html: `${icon('check')} Added (${totalQty}${items.length > 1 ? ` · ${items.length} models` : ''})` };
  }
  return { cls: 'btn-add', html: `${icon('plus')} Enquire` };
}
function updateCardButtons(){
  document.querySelectorAll('.btn-add[data-prod-id]').forEach(btn => {
    const s = cardBtnState(btn.dataset.prodId);
    btn.className = s.cls;
    btn.innerHTML = s.html;
  });
}

/* ============ CART / ENQUIRY ============ */
function addToCart(id, specificModel = null){
  const p=DATA.products.find(x=>x.id===id);
  if(!p) return;
  const model = specificModel || p.models[0];
  const existing = cart.find(c => c.id === id && c.model === model);
  if(existing){
    existing.qty++;
  } else {
    cart.push({ uid: newUid(), id, model, qty: 1 });
  }
  saveCart();
  updateCartUI();
  toast(icon('check') + ' ' + p.name + ' — ' + modelLabel(model) + ' added to enquiry');
  pulseCart();
}
function addAnotherModel(id){
  const p=DATA.products.find(x=>x.id===id);
  if(!p) return;
  const existingModels = cart.filter(c => c.id === id).map(c => c.model);
  const nextModel = p.models.find(m => !existingModels.includes(m));
  if (!nextModel) {
    toast(icon('check') + ' All ' + p.name + ' models are already in your enquiry');
    return;
  }
  cart.push({ uid: newUid(), id, model: nextModel, qty: 1 });
  saveCart();
  updateCartUI();
  renderDrawer();
  toast(icon('plus') + ' Added ' + nextModel + ' variant');
  pulseCart();
}
function removeFromCart(uid){
  cart = cart.filter(c => c.uid !== uid);
  saveCart();
  updateCartUI();
  renderDrawer();
}
function changeQty(uid, d){
  const c = cart.find(x => x.uid === uid);
  if(!c) return;
  c.qty = Math.max(1, c.qty + d);
  saveCart();
  updateCartUI();
  renderDrawer();
}
function setModel(uid, newModel){
  const c = cart.find(x => x.uid === uid);
  if(!c) return;
  const duplicate = cart.find(x => x.uid !== uid && x.id === c.id && x.model === newModel);
  if (duplicate) {
    duplicate.qty += c.qty;
    cart = cart.filter(x => x.uid !== uid);
    toast(icon('check') + ' Combined into ' + newModel + ' (Qty: ' + duplicate.qty + ')');
  } else {
    c.model = newModel;
  }
  saveCart();
  updateCartUI();
  renderDrawer();
}
function cartCount(){return cart.reduce((s,c)=>s+c.qty,0);}
function updateCartUI(){
  const n=cartCount();
  const b=document.getElementById('cartBadge');
  if(b){
    b.textContent=n;
    b.classList.toggle('show',n>0);
  }
  updateCardButtons();
  updateModalBtn();
}
function pulseCart(){
  const b=document.getElementById('cartBadge');
  if(!b) return;
  b.classList.remove('show');
  void b.offsetWidth;
  b.classList.add('show');
}

function openDrawer(){renderDrawer();document.getElementById('drawer').classList.add('open');document.getElementById('drawerOverlay').classList.add('open');if(document.body)document.body.style.overflow='hidden';}
function closeDrawer(){document.getElementById('drawer').classList.remove('open');document.getElementById('drawerOverlay').classList.remove('open');unlockScrollIfNeeded();}
/* Values typed into the enquiry form, kept across drawer re-renders */
const ENQ_FIELDS=['enqName','enqOrg','enqPhone','enqEmail','enqMsg'];
const enqDraft={};
function renderDrawer(){
  const body=document.getElementById('drawerBody');const foot=document.getElementById('drawerFoot');
  ENQ_FIELDS.forEach(id=>{const el=document.getElementById(id);if(el)enqDraft[id]=el.value;});
  if(cart.length===0){
    body.innerHTML=`<div class="drawer-empty"><div class="big">${icon('cart')}</div>
      <h3 style="font-size:17px;margin-bottom:6px">Your enquiry is empty</h3>
      <p style="font-size:14px">Add products from the catalog to request a quote.</p>
      <button class="btn btn-primary" style="margin-top:20px;background:var(--royal);color:#fff" onclick="closeDrawer();go('catalog')">Browse Catalog</button></div>`;
    foot.innerHTML='';return;
  }
  body.innerHTML=cart.map(c=>{
    const p=DATA.products.find(x=>x.id===c.id);if(!p)return'';
    const cat=catMeta(p.cat);
    let thumb;
    if(p.image){thumb=`<div class="enq-thumb"><img src="img/${p.image}" alt=""></div>`;}
    else{const col=CATCOLOR[p.cat]||['#0b4699','#2f7fd1'];thumb=`<div class="enq-thumb icon" style="background:linear-gradient(150deg,${col[0]},${col[1]})">${icon(cat.icon)}</div>`;}
    const opts=p.models.map(m=>`<option value="${m}" ${m===c.model?'selected':''}>${modelLabel(m)}</option>`).join('');
    return `<div class="enq-item">
      ${thumb}
      <div class="enq-info">
        <div class="ecat">${cat.name}</div>
        <h4>${p.name}</h4>
        <div class="enq-model-wrap">
          <label class="enq-model-lbl">Model:</label>
          <select class="enq-model-sel" onchange="setModel('${c.uid}',this.value)">${opts}</select>
        </div>
        <div class="enq-qty-row">
          <div class="enq-qty">
            <button type="button" onclick="changeQty('${c.uid}',-1)" aria-label="Decrease quantity">${icon('minus')}</button>
            <span>${c.qty}</span>
            <button type="button" onclick="changeQty('${c.uid}',1)" aria-label="Increase quantity">${icon('plus')}</button>
          </div>
          ${p.models.some(m => !cart.some(x => x.id === p.id && x.model === m)) ? `<button type="button" class="enq-add-model" onclick="addAnotherModel('${p.id}')">${icon('plus')} Add another model</button>` : ''}
        </div>
      </div>
      <button type="button" class="enq-remove" onclick="removeFromCart('${c.uid}')" aria-label="Remove item">${icon('x')}</button>
    </div>`;
  }).join('');
  foot.innerHTML=`
    <form class="enq-form" onsubmit="submitEnquiry(event)">
      <div class="row2"><input id="enqName" required placeholder="Your name *"><input id="enqOrg" placeholder="Hospital / Org"></div>
      <div class="row2"><input id="enqPhone" required type="tel" placeholder="Phone *"><input id="enqEmail" type="email" placeholder="Email"></div>
      <textarea id="enqMsg" rows="2" placeholder="Notes (optional)"></textarea>
      <button type="submit" class="enq-submit">${icon('send')} Submit Enquiry (${cartCount()} item${cartCount()>1?'s':''})</button>
    </form>
    <button class="enq-wa" onclick="sendWhatsApp()">${icon('whatsapp')} Send via WhatsApp</button>`;
  ENQ_FIELDS.forEach(id=>{const el=document.getElementById(id);if(el&&enqDraft[id])el.value=enqDraft[id];});
}
function buildEnquiryText(){
  let t='*Enquiry — Inquis Life Care Sciences*\n\n';
  cart.forEach((c,i)=>{
    const p=DATA.products.find(x=>x.id===c.id);
    if(p) t+=`${i+1}. ${p.name} — Model: ${modelLabel(c.model)} (Qty: ${c.qty})\n`;
  });
  const name=(document.getElementById('enqName')||{}).value||'';
  const org=(document.getElementById('enqOrg')||{}).value||'';
  const phone=(document.getElementById('enqPhone')||{}).value||'';
  const email=(document.getElementById('enqEmail')||{}).value||'';
  const msg=(document.getElementById('enqMsg')||{}).value||'';
  t+='\n';
  if(name)t+=`Name: ${name}\n`;
  if(org)t+=`Org: ${org}\n`;
  if(phone)t+=`Phone: ${phone}\n`;
  if(email)t+=`Email: ${email}\n`;
  if(msg)t+=`Notes: ${msg}\n`;
  return t;
}
function sendWhatsApp(){
  if(cart.length===0){toast(icon('x')+' Add products first');return;}
  window.open('https://wa.me/918762666932?text='+encodeURIComponent(buildEnquiryText()),'_blank');
}
function submitEnquiry(e){
  e.preventDefault();
  const name=(document.getElementById('enqName')||{}).value||'';
  const phone=(document.getElementById('enqPhone')||{}).value||'';
  const email=(document.getElementById('enqEmail')||{}).value||'';
  const org=(document.getElementById('enqOrg')||{}).value||'';
  const msg=(document.getElementById('enqMsg')||{}).value||'';
  let body='Enquiry from Inquis Life Care Sciences website\n\n';
  cart.forEach((c,i)=>{
    const p=DATA.products.find(x=>x.id===c.id);
    if(p) body+=`${i+1}. ${p.name} — Model: ${modelLabel(c.model)} (Qty: ${c.qty})\n`;
  });
  body+=`\nName: ${name}\nOrganization: ${org}\nPhone: ${phone}\nEmail: ${email}\nNotes: ${msg}`;
  const subject='Product Enquiry — '+cartCount()+' item(s)';
  window.location.href=`mailto:sales@inquislifecaresciences.com?cc=support@inquislifecaresciences.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  toast(icon('check')+' Opening your email to send the enquiry…');
}
function submitContact(e){
  e.preventDefault();
  const form=e.target;
  const inputs=form.querySelectorAll('input, textarea');
  const name=inputs[0]?.value||'';
  const org=inputs[1]?.value||'';
  const phone=inputs[2]?.value||'';
  const email=inputs[3]?.value||'';
  const msg=inputs[4]?.value||'';
  const subject=`Enquiry / Message from ${name || 'Website Visitor'}`;
  const body=`Message from Inquis Life Care Sciences Website Contact Form\n\nName: ${name}\nOrganization: ${org}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${msg}`;
  window.location.href=`mailto:sales@inquislifecaresciences.com?cc=support@inquislifecaresciences.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  toast(icon('check')+' Opening your email to send the message…');
  form.reset();
}

/* ============ MOBILE NAV ============ */
function openMobNav(){document.getElementById('mobNav').classList.add('open');document.body.style.overflow='hidden';}
function closeMobNav(){document.getElementById('mobNav').classList.remove('open');unlockScrollIfNeeded();}

/* ============ TOAST ============ */
function toast(html){
  const w=document.getElementById('toastWrap');
  const t=document.createElement('div');t.className='toast';t.innerHTML=html;
  w.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),320);},2600);
}

/* ============ REVEAL ON SCROLL ============ */
let io;
function observeReveals(){
  if(typeof IntersectionObserver === 'undefined') return;
  if(!io){io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});}
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
}

/* ============ ROUTING HANDLER ============ */
/* Syncs the page to the URL hash. Never adds history entries.
   initial=true on page load; false on Back/Forward (popstate). */
function handleHashRoute(initial = false){
  const raw = location.hash.replace(/^#/, '');
  const qIdx = raw.indexOf('?');
  const path = qIdx >= 0 ? raw.slice(0, qIdx) : raw;
  const params = new URLSearchParams(qIdx >= 0 ? raw.slice(qIdx + 1) : '');

  if (path.startsWith('product/')) {
    const pid = path.slice('product/'.length);
    if (DATA.products.some(p => p.id === pid)) {
      // On load show the catalog behind the modal; on Back/Forward keep the current view
      if (initial) go('catalog', false);
      if (!isModalOpen() || !modalProd || modalProd.id !== pid) openModal(pid, false);
      return;
    }
  }

  closeModal(false);
  let view = path;
  let cat = null, brand = null;
  if (path.startsWith('catalog/')) { view = 'catalog'; cat = path.slice('catalog/'.length); }
  if (path.startsWith('brand/')) { view = 'catalog'; brand = path.slice('brand/'.length); }
  if (!['home', 'catalog', 'about', 'contact'].includes(view)) view = 'home';

  const q = view === 'catalog' ? params.get('q') : null;
  if (q !== null) applySearch(q);

  // Only switch view when it actually changes (closing a modal via Back must not re-render/scroll)
  if (initial || currentView() !== view) go(view, false);
  else if (q !== null) renderCatalog();

  if (cat !== null) {
    const validCat = DATA.categories.some(c => c.id === cat) ? cat : 'all';
    if (validCat !== catFilter || initial) setCat(validCat);
  }
  if (brand !== null) {
    const validBrand = (brand === 'other' || brandMeta(brand)) ? brand : 'all';
    if (validBrand !== brandFilter || initial) { catFilter = 'all'; setBrand(validBrand); }
  }
}

/* ============ INIT ============ */
document.getElementById('yr').textContent=new Date().getFullYear();
buildHome();
buildFilters();
updateCartUI();
observeReveals();
window.addEventListener('scroll',()=>{document.getElementById('hdr').classList.toggle('scrolled',window.scrollY>10);},{passive:true});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeDrawer();closeMobNav();}});
window.addEventListener('popstate', () => handleHashRoute(false));

// initial route
handleHashRoute(true);
