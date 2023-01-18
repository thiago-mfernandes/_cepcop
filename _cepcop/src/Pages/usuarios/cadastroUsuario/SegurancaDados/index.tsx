import { CardAlerta } from './styles'

export function SegurancaDados() {
  return (
    <CardAlerta className="card-alerta">
      <i>
        O CEPCOP se compromete com a segurança de seus dados afim de melhorar a
        sua experiência de armazenamento. Todos os campos marcados com{' '}
        <span>*</span> devem ser preenchidos.
      </i>
    </CardAlerta>
  )
}
