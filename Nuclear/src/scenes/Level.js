
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// dino
		const dino = this.add.image(640, 288, "dino");
		dino.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 250), Phaser.Geom.Rectangle.Contains);
		dino.visible = false;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(dino);

		// pushActionScript
		new PushActionScript(onPointerDownScript);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(dino);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// primer_frame
		const primer_frame = this.add.image(645, 359, "Primer frame");

		// boton1
		const boton1 = this.add.image(620, 549, "boton1");

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(boton1);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// segundo_frame
		const segundo_frame = this.add.image(641, 360, "segundo frame");

		// boton2
		const boton2 = this.add.image(629, 340, "boton2");

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(boton2);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript_2);

		// tercer_frame
		const tercer_frame = this.add.image(640, 360, "tercer frame");

		// boton_novale3
		const boton_novale3 = this.add.image(638, 427, "boton novale3");

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(boton_novale3);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// boton_novale2
		const boton_novale2 = this.add.image(638, 491, "boton novale2");

		// onPointerDownScript_4
		const onPointerDownScript_4 = new OnPointerDownScript(boton_novale2);

		// pushActionScript_4
		new PushActionScript(onPointerDownScript_4);

		// boton_vale1
		const boton_vale1 = this.add.image(638, 622, "boton vale1");

		// onPointerDownScript_5
		const onPointerDownScript_5 = new OnPointerDownScript(boton_vale1);

		// pushActionScript_5
		new PushActionScript(onPointerDownScript_5);

		// boton_novale1
		const boton_novale1 = this.add.image(638, 555, "boton novale1");

		// onPointerDownScript_6
		const onPointerDownScript_6 = new OnPointerDownScript(boton_novale1);

		// pushActionScript_6
		new PushActionScript(onPointerDownScript_6);

		// cuarto_frame
		const cuarto_frame = this.add.image(640, 360, "cuarto frame");

		// boton3
		const boton3 = this.add.image(879, 290, "boton3");

		// onPointerDownScript_7
		const onPointerDownScript_7 = new OnPointerDownScript(boton3);

		// pushActionScript_7
		new PushActionScript(onPointerDownScript_7);

		// quinto_frame
		const quinto_frame = this.add.image(640, 360, "quinto frame");

		// boton4
		const boton4 = this.add.image(397, 352, "boton4");

		// onPointerDownScript_8
		const onPointerDownScript_8 = new OnPointerDownScript(boton4);

		// pushActionScript_8
		new PushActionScript(onPointerDownScript_8);

		// sexto_frame
		const sexto_frame = this.add.image(640, 358, "sexto frame");

		// boton5
		const boton5 = this.add.image(873, 345, "boton5");

		// onPointerDownScript_9
		const onPointerDownScript_9 = new OnPointerDownScript(boton5);

		// pushActionScript_9
		new PushActionScript(onPointerDownScript_9);

		// septimo_frame
		const septimo_frame = this.add.image(638, 360, "septimo frame");

		// boton_novale6
		const boton_novale6 = this.add.image(618, 419, "boton novale6");

		// onPointerDownScript_10
		const onPointerDownScript_10 = new OnPointerDownScript(boton_novale6);

		// pushActionScript_10
		new PushActionScript(onPointerDownScript_10);

		// boton_novale5
		const boton_novale5 = this.add.image(621, 493, "boton novale5");

		// onPointerDownScript_11
		const onPointerDownScript_11 = new OnPointerDownScript(boton_novale5);

		// pushActionScript_11
		new PushActionScript(onPointerDownScript_11);

		// boton_vale2
		const boton_vale2 = this.add.image(620, 563, "boton vale2");

		// onPointerDownScript_12
		const onPointerDownScript_12 = new OnPointerDownScript(boton_vale2);

		// pushActionScript_12
		new PushActionScript(onPointerDownScript_12);

		// boton_novale4
		const boton_novale4 = this.add.image(618, 636, "boton novale4");

		// onPointerDownScript_13
		const onPointerDownScript_13 = new OnPointerDownScript(boton_novale4);

		// pushActionScript_13
		new PushActionScript(onPointerDownScript_13);

		// octavo_frame
		const octavo_frame = this.add.image(641, 360, "octavo frame");

		// boton6
		const boton6 = this.add.image(998, 300, "boton6");
		boton6.visible = false;

		// noveno_frame
		const noveno_frame = this.add.image(638, 360, "noveno frame");

		// boton7
		const boton7 = this.add.image(597, 334, "boton7");

		// onPointerDownScript_14
		const onPointerDownScript_14 = new OnPointerDownScript(boton7);

		// pushActionScript_14
		new PushActionScript(onPointerDownScript_14);

		// decimo_frame
		const decimo_frame = this.add.image(641, 360, "decimo frame");

		// boton_novale7
		const boton_novale7 = this.add.image(614, 488, "boton novale7");

		// onPointerDownScript_15
		const onPointerDownScript_15 = new OnPointerDownScript(boton_novale7);

		// pushActionScript_15
		new PushActionScript(onPointerDownScript_15);

		// boton_vale3
		const boton_vale3 = this.add.image(612, 557, "boton vale3");

		// onPointerDownScript_16
		const onPointerDownScript_16 = new OnPointerDownScript(boton_vale3);

		// pushActionScript_16
		new PushActionScript(onPointerDownScript_16);

		// boton_novale9
		const boton_novale9 = this.add.image(611, 621, "boton novale9");

		// onPointerDownScript_17
		const onPointerDownScript_17 = new OnPointerDownScript(boton_novale9);

		// pushActionScript_17
		new PushActionScript(onPointerDownScript_17);

		// boton_novale8
		const boton_novale8 = this.add.image(615, 424, "boton novale8");

		// onPointerDownScript_18
		const onPointerDownScript_18 = new OnPointerDownScript(boton_novale8);

		// pushActionScript_18
		new PushActionScript(onPointerDownScript_18);

		// onceavo_frame
		const onceavo_frame = this.add.image(638, 360, "onceavo frame");

		// boton8
		const boton8 = this.add.image(260, 337, "boton8");

		// onPointerDownScript_19
		const onPointerDownScript_19 = new OnPointerDownScript(boton8);

		// pushActionScript_19
		new PushActionScript(onPointerDownScript_19);

		// doceavo_frame
		const doceavo_frame = this.add.image(640, 363, "doceavo frame");

		// boton_novale12
		const boton_novale12 = this.add.image(597, 640, "boton novale12");

		// onPointerDownScript_20
		const onPointerDownScript_20 = new OnPointerDownScript(boton_novale12);

		// pushActionScript_20
		new PushActionScript(onPointerDownScript_20);

		// boton_novale10
		const boton_novale10 = this.add.image(597, 429, "boton novale10");

		// onPointerDownScript_22
		const onPointerDownScript_22 = new OnPointerDownScript(boton_novale10);

		// pushActionScript_22
		new PushActionScript(onPointerDownScript_22);

		// boton_novale11
		const boton_novale11 = this.add.image(601, 570, "boton novale11");

		// onPointerDownScript_21
		const onPointerDownScript_21 = new OnPointerDownScript(boton_novale11);

		// pushActionScript_21
		new PushActionScript(onPointerDownScript_21);

		// boton_vale4
		const boton_vale4 = this.add.image(597, 500, "boton vale4");

		// onPointerDownScript_23
		const onPointerDownScript_23 = new OnPointerDownScript(boton_vale4);

		// pushActionScript_23
		new PushActionScript(onPointerDownScript_23);

		// treceavo_frame
		const treceavo_frame = this.add.image(640, 357, "treceavo frame");

		// boton9
		const boton9 = this.add.image(937, 331, "boton9");

		// onPointerDownScript_24
		const onPointerDownScript_24 = new OnPointerDownScript(boton9);

		// pushActionScript_24
		new PushActionScript(onPointerDownScript_24);

		// catorceavo_frame
		const catorceavo_frame = this.add.image(643, 358, "catorceavo frame");

		// boton10
		const boton10 = this.add.image(304, 355, "boton10");

		// onPointerDownScript_25
		const onPointerDownScript_25 = new OnPointerDownScript(boton10);

		// pushActionScript_25
		new PushActionScript(onPointerDownScript_25);

		// quinceavo_frame
		const quinceavo_frame = this.add.image(640, 360, "quinceavo frame");

		// boton11
		const boton11 = this.add.image(283, 439, "boton11");

		// onPointerDownScript_26
		const onPointerDownScript_26 = new OnPointerDownScript(boton11);

		// pushActionScript_26
		new PushActionScript(onPointerDownScript_26);

		// dieciseisavo_frame
		const dieciseisavo_frame = this.add.image(643, 358, "dieciseisavo frame");

		// boton12
		const boton12 = this.add.image(316, 508, "boton12");

		// onPointerDownScript_27
		const onPointerDownScript_27 = new OnPointerDownScript(boton12);

		// pushActionScript_27
		new PushActionScript(onPointerDownScript_27);

		// diecisieteavo_frame
		const diecisieteavo_frame = this.add.image(643, 363, "diecisieteavo frame");

		// boton13
		const boton13 = this.add.image(937, 424, "boton13");

		// onPointerDownScript_28
		const onPointerDownScript_28 = new OnPointerDownScript(boton13);

		// pushActionScript_28
		new PushActionScript(onPointerDownScript_28);

		// dieciochoavo_frame
		const dieciochoavo_frame = this.add.image(641, 363, "dieciochoavo frame");

		// acabo_tiempo
		const acabo_tiempo = this.add.image(641, 358, "acabo tiempo");

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "TOP";

		// moveInSceneActionScript (components)
		const moveInSceneActionScriptDurationConfigComp = new DurationConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDurationConfigComp.duration = 1000;

		this.dino = dino;
		this.primer_frame = primer_frame;
		this.boton1 = boton1;
		this.segundo_frame = segundo_frame;
		this.boton2 = boton2;
		this.tercer_frame = tercer_frame;
		this.boton_novale3 = boton_novale3;
		this.boton_novale2 = boton_novale2;
		this.boton_vale1 = boton_vale1;
		this.boton_novale1 = boton_novale1;
		this.cuarto_frame = cuarto_frame;
		this.boton3 = boton3;
		this.quinto_frame = quinto_frame;
		this.boton4 = boton4;
		this.sexto_frame = sexto_frame;
		this.boton5 = boton5;
		this.septimo_frame = septimo_frame;
		this.boton_novale6 = boton_novale6;
		this.boton_novale5 = boton_novale5;
		this.boton_vale2 = boton_vale2;
		this.boton_novale4 = boton_novale4;
		this.octavo_frame = octavo_frame;
		this.boton6 = boton6;
		this.noveno_frame = noveno_frame;
		this.boton7 = boton7;
		this.decimo_frame = decimo_frame;
		this.boton_novale7 = boton_novale7;
		this.boton_vale3 = boton_vale3;
		this.boton_novale9 = boton_novale9;
		this.boton_novale8 = boton_novale8;
		this.onceavo_frame = onceavo_frame;
		this.boton8 = boton8;
		this.doceavo_frame = doceavo_frame;
		this.boton_novale12 = boton_novale12;
		this.boton_novale10 = boton_novale10;
		this.boton_novale11 = boton_novale11;
		this.boton_vale4 = boton_vale4;
		this.treceavo_frame = treceavo_frame;
		this.boton9 = boton9;
		this.catorceavo_frame = catorceavo_frame;
		this.boton10 = boton10;
		this.quinceavo_frame = quinceavo_frame;
		this.boton11 = boton11;
		this.dieciseisavo_frame = dieciseisavo_frame;
		this.boton12 = boton12;
		this.diecisieteavo_frame = diecisieteavo_frame;
		this.boton13 = boton13;
		this.dieciochoavo_frame = dieciochoavo_frame;
		this.acabo_tiempo = acabo_tiempo;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	dino;
	/** @type {Phaser.GameObjects.Image} */
	primer_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton1;
	/** @type {Phaser.GameObjects.Image} */
	segundo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton2;
	/** @type {Phaser.GameObjects.Image} */
	tercer_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale3;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale2;
	/** @type {Phaser.GameObjects.Image} */
	boton_vale1;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale1;
	/** @type {Phaser.GameObjects.Image} */
	cuarto_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton3;
	/** @type {Phaser.GameObjects.Image} */
	quinto_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton4;
	/** @type {Phaser.GameObjects.Image} */
	sexto_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton5;
	/** @type {Phaser.GameObjects.Image} */
	septimo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale6;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale5;
	/** @type {Phaser.GameObjects.Image} */
	boton_vale2;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale4;
	/** @type {Phaser.GameObjects.Image} */
	octavo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton6;
	/** @type {Phaser.GameObjects.Image} */
	noveno_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton7;
	/** @type {Phaser.GameObjects.Image} */
	decimo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale7;
	/** @type {Phaser.GameObjects.Image} */
	boton_vale3;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale9;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale8;
	/** @type {Phaser.GameObjects.Image} */
	onceavo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton8;
	/** @type {Phaser.GameObjects.Image} */
	doceavo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale12;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale10;
	/** @type {Phaser.GameObjects.Image} */
	boton_novale11;
	/** @type {Phaser.GameObjects.Image} */
	boton_vale4;
	/** @type {Phaser.GameObjects.Image} */
	treceavo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton9;
	/** @type {Phaser.GameObjects.Image} */
	catorceavo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton10;
	/** @type {Phaser.GameObjects.Image} */
	quinceavo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton11;
	/** @type {Phaser.GameObjects.Image} */
	dieciseisavo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton12;
	/** @type {Phaser.GameObjects.Image} */
	diecisieteavo_frame;
	/** @type {Phaser.GameObjects.Image} */
	boton13;
	/** @type {Phaser.GameObjects.Image} */
	dieciochoavo_frame;
	/** @type {Phaser.GameObjects.Image} */
	acabo_tiempo;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		//poner todas las imagenes en invisibles
		this.acabo_tiempo.visible=false;
		this.dieciochoavo_frame.visible=false;
		this.boton13.visible=false;
		this.diecisieteavo_frame.visible=false;
		this.boton12.visible=false;
		this.dieciseisavo_frame.visible=false;
		this.boton11.visible=false;
		this.quinceavo_frame.visible=false;
		this.boton10.visible=false;
		this.catorceavo_frame.visible=false;
		this.boton9.visible=false;
		this.treceavo_frame.visible=false;
		this.boton_vale4.visible=false;
		this.boton_novale11.visible=false;
		this.boton_novale10.visible=false;
		this.boton_novale12.visible=false;
		this.doceavo_frame.visible=false;
		this.boton8.visible=false;
		this.onceavo_frame.visible=false;
		this.boton_novale8.visible=false;
		this.boton_novale9.visible=false;
		this.boton_vale3.visible=false;
		this.boton_novale7.visible=false;
		this.decimo_frame.visible=false;
		this.boton7.visible=false;
		this.noveno_frame.visible=false;
		this.boton6.visible=false;
		this.octavo_frame.visible=false;
		this.boton_novale4.visible=false;
		this.boton_vale2.visible=false;
		this.boton_novale5.visible=false;
		this.boton_novale6.visible=false;
		this.septimo_frame.visible=false;
		this.boton5.visible=false;
		this.sexto_frame.visible=false;
		this.boton4.visible=false;
		this.quinto_frame.visible=false;
		this.boton3.visible=false;
		this.cuarto_frame.visible=false;
		this.boton_novale1.visible=false;
		this.boton_vale1.visible=false;
		this.boton_novale2.visible=false;
		this.boton_novale3.visible=false;
		this.tercer_frame.visible=false;
		this.boton2.visible=false;
		this.segundo_frame.visible=false;

		//que pasa al aplastar boton1
		this.boton1.setInteractive();
		this.boton1.on('pointerdown', function () {
			this.boton2.visible=true;
			this.segundo_frame.visible=true;

		}, this);

		//que pasa al aplastar boton2
		this.boton2.on('pointerdown', function () {
			this.boton_novale1.visible=true;
			this.boton_vale1.visible=true;
			this.boton_novale2.visible=true;
			this.boton_novale3.visible=true;
			this.tercer_frame.visible=true;

		}, this);

		this.boton_vale1.on('pointerdown', function () {
			this.cuarto_frame.visible=true;
			this.boton3.visible=true;

		}, this);

		this.boton3.on('pointerdown', function () {
			this.quinto_frame.visible=true;
			this.boton4.visible=true;

		}, this);

		this.boton4.on('pointerdown', function () {
			this.boton5.visible=true;
			this.sexto_frame.visible=true;

		}, this);

		this.boton5.on('pointerdown', function () {
			this.boton_novale4.visible=true;
			this.boton_vale2.visible=true;
			this.boton_novale5.visible=true;
			this.boton_novale6.visible=true;
			this.septimo_frame.visible=true;
		}, this);

		this.boton_vale2.on('pointerdown', function () {
			this.octavo_frame.visible=true;
			this.boton6.visible=true;
		}, this);

		this.boton6.setInteractive();

		this.boton6.on('pointerdown', function () {
			this.boton7.visible=true;
			this.noveno_frame.visible=true;
		}, this);



		this.boton7.on('pointerdown', function () {
			this.boton_novale8.visible=true;
			this.boton_novale9.visible=true;
			this.boton_vale3.visible=true;
			this.boton_novale7.visible=true;
			this.decimo_frame.visible=true;
		}, this);

		this.boton_vale3.on('pointerdown', function () {
			this.boton8.visible=true;
			this.onceavo_frame.visible=true;

		}, this);

		this.boton8.on('pointerdown', function () {
			this.boton_vale4.visible=true;
			this.boton_novale11.visible=true;
			this.boton_novale10.visible=true;
			this.boton_novale12.visible=true;
			this.doceavo_frame.visible=true;

		}, this);


		this.boton_vale4.on('pointerdown', function () {
			this.boton9.visible=true;
			this.treceavo_frame.visible=true;
		}, this);

		this.boton9.on('pointerdown', function () {
			this.boton10.visible=true;
			this.catorceavo_frame.visible=true;
		}, this);

		this.boton10.on('pointerdown', function () {
			this.boton11.visible=true;
			this.quinceavo_frame.visible=true;
		}, this);

		this.boton11.on('pointerdown', function () {
			this.boton12.visible=true;
			this.dieciseisavo_frame.visible=true;
		}, this);

		this.boton12.on('pointerdown', function () {
			this.boton13.visible=true;
			this.diecisieteavo_frame.visible=true;
		}, this);

		this.boton13.on('pointerdown', function () {
			this.dieciochoavo_frame.visible=true;
			clearInterval(intervaloTemporizador);
		}, this);
		
		//tiempo
var tiempo=30;
var texto1 = this.add.text(1245, 57,'00:00:'+ tiempo,  {
fontFamily: 'Arial',
fontSize: 50,
color: '#ffffff'
});

texto1.setOrigin(1, 0); // Establece el origen del texto en la esquina superior derecha
texto1.setDepth(1); // Establece una profundidad mayor que la de la imagen (por ejemplo, 1)


// Actualizar el temporizador cada segundo
const intervaloTemporizador = setInterval(() => {
tiempo--;
texto1.setText('00:00:'+tiempo );

// Verificar si el temporizador ha llegado a cero
if (tiempo <= 0) {
// Mostrar la imagen de "error"
this.acabo_tiempo.visible=true;

// Detener el intervalo de actualización del temporizador
clearInterval(intervaloTemporizador);

// Pausar la escena u otra lógica según tus necesidades
this.scene.pause();
// O puedes agregar aquí tu lógica para reiniciar el juego, mostrar un mensaje, etc.
}
}, 1250);

		




	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
