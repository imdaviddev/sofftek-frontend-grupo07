export interface Turno {
  id: number;
  motivoConsulta: string;
  fechaHoraCita: string;
  idMedicoEspecialista: number;
}

export interface Especialista {
  id: number;
  nombre: string;
  especialidad: string;
  horariosConsulta: string;
  ubicacion: string;
  fechaCreacion: string;
}

export interface Receta {
  id: number;
  descripcion: string;
  fechaCreacion: string;
}

export interface MisTurnosResponse {
  id: number;
  motivoConsulta: string;
  fechaHoraCita: string;
  especialista: Especialista;
  receta?: Receta;
}
