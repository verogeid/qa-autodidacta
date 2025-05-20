# Ejercicios — Semana 5

## 1. Personaliza una excepción

Crea una ruta que reciba un número. Si es negativo, responde con 400 y el mensaje "No se permiten números negativos".

---

## 2. Emisión de JWT

Simula una función de login que devuelva un token JWT firmado con un secreto. Incluye campo `"sub": "usuario1"` en el payload.

---

## 3. Ruta protegida

Crea una ruta `/admin` que requiera un token válido. Si el `sub` no es `"admin"`, debe devolver un 403.

---

## 4. Cifrado con JWE

Crea una función que reciba un token y lo devuelva cifrado con JWE. Después, otra que lo descifre y lo imprima.

---

## 5. ¿Qué riesgo implica no cifrar un JWT?

Explica por qué solo firmar un JWT puede no ser suficiente en ciertos contextos.
