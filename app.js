const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let id = 0


const app = Vue.createApp({
    data() {
        return {
            modalOn: false,
            vistaTarjetas: false,
            nuevoTitulo: '',
            nuevaFecha: new Date("0000/00/00"),
            nuevaDescripcion: '',
            nuevoComentario: '',
            nuevoTag: '',
            tareas: [
                { id: id++, titulo: "Investigar vue", completada: true, fecha: new Date("2022/03/09"), comentarios: "me agrada", descripcion: "investigar como intalar y las principales caracteristicas", tags: "#vue" },
                { id: id++, titulo: "Armar lista de tareas", completada: false, fecha: new Date("2022/03/10"), comentarios: "Estoy en ello", descripcion: "armar una interfaz tipo to do", tags: "" },
                { id: id++, titulo: "Subir a Github", completada: false, fecha: new Date("2022/03/10"), comentarios: "Repo publico", descripcion: "", tags: "" }
            ]
        }
    },
    computed: {

    },
    methods: {
        alternarVista() {
            this.vistaTarjetas = !this.vistaTarjetas
        },
        obtenerMes(mes) {
            return meses[mes]
        },
        marcarTarea() {
            this.completada = !this.completada
        },
        showModal() {
            this.modalOn = !this.modalOn
        },
        agregarFecha(fecha) {
            return new Date(fecha)
        },
        agregarTarea() {
            this.tareas.push({ id: id++, titulo: this.nuevoTitulo.trim(), completada: false, fecha: this.agregarFecha(this.nuevaFecha), comentarios: this.nuevoComentario.trim(), tags: "#".concat(this.nuevoTag.trim()) })
            this.nuevoTitulo = ''
            this.nuevaDescripcion = ''
            this.nuevoComentario = ''
            this.nuevoTag = ''
            this.nuevaFecha = Date.now()
            this.showModal()
        },
        eliminarTarea(key) {
            this.tareas.splice(key, 1)
        }

    }

})

app.mount('#app')