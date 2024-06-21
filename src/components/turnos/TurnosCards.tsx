import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import axios from 'axios';
import { useEffect, useState } from "react";
import TurnosList from "../turnos/TurnosList";

export default function TurnosCards() {
  const [pacienteInfo, setPacienteInfo] = useState(null);
  const [especialistaInfo, setEspecialistaInfo] = useState(null);

  useEffect(() => {
    const fetchPacienteInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8080/pacientes'); // Obtener información del paciente del backend
        // Tomar la información del primer paciente de la lista (si hay pacientes)
        const primerPaciente = response.data[0];
        setPacienteInfo(primerPaciente);
      } catch (error) {
        console.error('Error al obtener la información del paciente:', error);
      }
    };

    fetchPacienteInfo();
  }, []);

  useEffect(() => {
    const fetchEspecialistaInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8080/especialistas'); // Obtener información del paciente del backend
        // Tomar la información del primer paciente de la lista (si hay pacientes)
        const primerEspecialista = response.data[0];
        setEspecialistaInfo(primerEspecialista);
      } catch (error) {
        console.error('Error al obtener la información del especialista:', error);
      }
    };

    fetchEspecialistaInfo();
  }, []);

  const handleEliminarTurno = async () => {
    // Aquí puedes implementar la lógica para eliminar un turno asociado al paciente actual
  };

  const handleModificarTurno = async () => {
    // Aquí puedes implementar la lógica para modificar un turno asociado al paciente actual
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {pacienteInfo && pacienteInfo.id}
          </Avatar>
        }
        title={`Turno N° ${pacienteInfo && pacienteInfo.id}`}
        subheader={`${especialistaInfo && especialistaInfo.ubicacion}`}
      />
      <CardContent>
        <TurnosList pacienteInfo={pacienteInfo} />
      </CardContent>

      <CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          >
            <Button onClick={handleModificarTurno}>Modificar</Button>
            <Button onClick={handleEliminarTurno}>Eliminar</Button>
          </ButtonGroup>
        </Box>
      </CardActions>
    </Card>
  );
}
