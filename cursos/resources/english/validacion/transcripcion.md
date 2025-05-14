# Guía de Transcripción de Ejercicios Orales

Este documento explica cómo transcribir tus grabaciones usando herramientas automáticas, y cómo interpretar los resultados para mejorar tu pronunciación y claridad.

---

## ¿Por qué transcribir?

- Verificar si tu pronunciación es comprensible.
- Detectar errores sistemáticos (omisión de palabras, confusiones, acentos mal colocados).
- Medir mejoras con el tiempo.

---

## Herramientas recomendadas

### 1. [Whisper (OpenAI)](https://github.com/openai/whisper)
Transcriptor potente de código abierto. Puedes usarlo localmente si tienes Python instalado.

```bash
pip install git+https://github.com/openai/whisper.git 
whisper tu_audio.mp3 --language English --model small
```

**Ventajas**: muy preciso, incluso con acentos.
**Requiere**: *Python 3.8+*, *ffmpeg*, entorno local.

### 2. [Whispr (Web)](https://whispr.ai/)

Versión en línea de Whisper. Sube el archivo y obtienes la transcripción.

**Ventajas**: sin instalación.
**Desventajas**: menos configurable.

### 3. [Descript](https://www.descript.com/)

Ideal si prefieres trabajar desde una interfaz visual y combinar edición + transcripción.

**Ventajas**: muy amigable para usuarios no técnicos.
**Desventajas**: tiene versión gratuita limitada.

---

## ¿Cómo validar la calidad?

1. Compara la transcripción con el texto original del ejercicio.

2. Marca palabras mal interpretadas o ausentes.

3. Clasifica los errores:

- Pronunciación incompleta o confusa.
- Omisión de conectores o sonidos clave.
- Ritmo inadecuado.

---

## Buenas prácticas

- Usa grabaciones limpias y sin ruido.
- No corrijas manualmente la transcripción al principio: el objetivo es ver lo que realmente se entendió.
- Repite los ejercicios con baja puntuación hasta que la transcripción se acerque al original.

### Ejemplo

#### Texto objetivo:

> I usually review pull requests after our daily meeting.

#### Transcripción resultante:

> I usually review full requests after our daily meeting.

#### Diagnóstico:

> pull → full: falta de claridad en la /p/
> Repetir el ejercicio enfocando en explosiva inicial /p/ con grabación lenta.

---

## Consejo adicional

Combina la transcripción con el script comparador_audios.py para tener feedback cuantitativo y cualitativo.
