import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"
import type { FoodData } from "../../interface/FoodData"
import "./modal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue: (value: string) => void
}

interface ModalProps {
    closeModal: () => void
}

function Input({ label, value, updateValue }: InputProps) {
    return (
        <>
            <label>{label}</label>
            <input
                value={value}
                onChange={e => updateValue(e.target.value)}
            />
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    const { mutate, isSuccess } = useFoodDataMutate()

    const submit = () => {
        const foodData: FoodData = {
            title,
            price: Number(price),
            image
        }

        console.log("Dados enviados:", foodData)

        mutate(foodData, {
            onSuccess: () => {
                console.log("Cadastro realizado!")
            },
            onError: (error) => {
                console.error("Erro ao cadastrar:", error)
            }
        })
    }

    useEffect(() => {
        if (!isSuccess) return

        closeModal()
    }, [isSuccess, closeModal])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>

                <form className="input-container">
                    <Input
                        label="Título"
                        value={title}
                        updateValue={setTitle}
                    />

                    <Input
                        label="Preço"
                        value={price}
                        updateValue={setPrice}
                    />

                    <Input
                        label="Imagem"
                        value={image}
                        updateValue={setImage}
                    />
                </form>

                <button
                    type="button"
                    onClick={submit}
                    className="btn-secondary"
                >
                    Postar
                </button>
            </div>
        </div>
    )
}