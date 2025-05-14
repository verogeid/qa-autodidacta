import librosa
import numpy as np
from scipy.spatial.distance import euclidean
import speech_recognition as sr

def audio_features(path):
    y, sr_ = librosa.load(path, sr=None)
    mfcc = librosa.feature.mfcc(y=y, sr=sr_, n_mfcc=13)
    return np.mean(mfcc.T, axis=0)

def transcribe(path):
    recognizer = sr.Recognizer()
    with sr.AudioFile(path) as source:
        audio = recognizer.record(source)
    try:
        return recognizer.recognize_google(audio)
    except sr.UnknownValueError:
        return "(inaudible)"
    except sr.RequestError:
        return "(API error)"

def compare_audios(original, user):
    print("⏺️ Transcripción original:")
    print(transcribe(original))
    print("\n🎙️ Tu transcripción:")
    print(transcribe(user))

    mfcc_original = audio_features(original)
    mfcc_user = audio_features(user)
    distance = euclidean(mfcc_original, mfcc_user)

    print(f"\n📊 Distancia fonética: {distance:.2f}")
    if distance < 20:
        print("✅ Buena coincidencia en pronunciación.")
    elif distance < 50:
        print("⚠️ Pronunciación aceptable, pero mejorable.")
    else:
        print("❌ Requiere mejora en la pronunciación.")
