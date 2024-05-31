import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import  "./ImovelCard.css";

export default function ImovelCard(props) {
  //nativo do javaScript!
  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const valorFormatado = formatter.format(props.imovel.price);

  return (
    <Card className="imovelCard">
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.imovel.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.imovel.address}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {valorFormatado}
          </Typography>
          <div className="linhaPrincipal">
            <Typography component="span">{props.imovel.owner}</Typography>
            <Typography component="h3">{props.imovel.type}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
