# generaEntities
 Through execution it creates entities in Nestjs and TypeORM
 Example = > 
Execute: node createEntities.js Usuario nombre:string:unique edad:number correo:string:unique pepe:string idChico:number:unique
The output is a file with this content
name file: Usuario.entity.ts
Content :
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;
@Column()
  edad: number;
@Column({ unique: true })
  correo: string;
@Column()
  pepe: string;
@Column({ unique: true })
  idChico: number;
}
