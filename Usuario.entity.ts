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
