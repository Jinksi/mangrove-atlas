function toRasterSource({ filename, source }) {
  return {
    tiles: [`https://mangrove_atlas.storage.googleapis.com/tilesets/${filename}/{z}/{x}/{y}.png`],
    type: 'raster',
    tileSize: 256,
    ...source,
  };
}

function createRasterLayer({ name, render }) {
  return [
    {
      id: name,
      type: 'raster',
      source: `${name}-tiles`,
      layout: {
        visibility: 'none'
      },
      ...render
    }
  ];
}

const geojsons = [
  {
    id: 'alerts',
    source: {
      type: 'geojson',
      data: 'https://us-central1-mangrove-atlas-246414.cloudfunctions.net/fetch-alerts-heatmap?start_date=2020-04-01&end_date=2020-12-31{{locationId}}'
    },
    layers: [
      {
        id: 'alerts-heat',
        type: 'heatmap',
        source: 'alerts',
        maxzoom: 15,
        paint: {
          'heatmap-weight': [
            'interpolate',
            ['linear'],
            ['get', 'count'],
            0,
            2,
            6,
            5
          ],
          'heatmap-intensity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            2,
            9,
            20
          ],
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0,
            'rgba(210, 50, 169, 0)',
            0.05,
            'rgba(212,58,159, 0.5)',
            0.20,
            'rgba(215,66,149, 0.8)',
            0.30,
            'rgba(217,75,139, 0.8)',
            0.35,
            'rgba(220,83,129, 0.3)',
            0.40,
            'rgba(223,92,119, 0.4)',
            0.45,
            'rgba(225,100,109, 0.4)',
            0.5,
            'rgba(228,109,99, 0.5)',
            0.55,
            'rgba(231,117,89, 0.5)',
            0.60,
            'rgba(233,126,79, 0.5)',
            0.65,
            'rgba(236,134,69, 0.6)',
            0.70,
            'rgba(239,143,59, 0.6)',
            0.75,
            'rgba(241,151,49, 0.6)',
            0.80,
            'rgba(244,160,39, 0.6)',
            0.85,
            'rgba(247,168,29, 0.6)',
            0.90,
            'rgba(249,177,19, 0.6)',
            0.95,
            'rgba(252,185,9, 0.7)',
            1,
            'rgba(255, 194, 0, 1)',
          ],
          'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            5,
            7,
            10
          ],
          'heatmap-opacity': 0.9
        }
      },
      {
        id: 'alerts-point',
        type: 'circle',
        source: 'alerts',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            ['interpolate', ['linear'], ['get', 'count'], 1, 1, 6, 4],
            16,
            ['interpolate', ['linear'], ['get', 'count'], 1, 5, 6, 50]
          ],
          'circle-color': 'rgba(210, 50, 169, 1)',
          'circle-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            0,
            8,
            1
          ]
        }
      }
    ]
  }
];

const rasters = [
  {
    name: 'biomass_1996_v1-0_z0-12',
    filename: 'mangrove_aboveground_biomass_1996_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
    render: {
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'biomass_1996_v1-0_z13-15',
    filename: 'mangrove_aboveground_biomass_1996_v1-0_z13-15',
    source: {
      type: 'raster',
      minzoom: 13,
      maxzoom: 15
    },
    render: {
      minzoom: 13
    }
  },
  {
    name: 'biomass_2000_v1-2_z0-12',
    filename: 'mangrove_aboveground_biomass_2000_v1-2_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
    render: {
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'biomass_2000_v1-2_z13-15',
    filename: 'mangrove_aboveground_biomass_2000_v1-2_z13-15',
    source: {
      type: 'raster',
      minzoom: 13,
      maxzoom: 15
    },
    render: {
      minzoom: 13
    }
  },
  {
    name: 'biomass_2007_v1-0_z0-12',
    filename: 'mangrove_aboveground_biomass_2007_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
    render: {
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'biomass_2007_v1-0_z13-15',
    filename: 'mangrove_aboveground_biomass_2007_v1-0_z13-15',
    source: {
      type: 'raster',
      minzoom: 13,
      maxzoom: 15
    },
    render: {
      minzoom: 13
    }
  },
  {
    name: 'biomass_2008_v1-0_z0-12',
    filename: 'mangrove_aboveground_biomass_2008_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
    render: {
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'biomass_2008_v1-0_z13-15',
    filename: 'mangrove_aboveground_biomass_2008_v1-0_z13-15',
    source: {
      type: 'raster',
      minzoom: 13,
      maxzoom: 15
    },
    render: {
      minzoom: 13
    }
  },
  {
    name: 'biomass_2009_v1-0_z0-12',
    filename: 'mangrove_aboveground_biomass_2009_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
    render: {
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'biomass_2009_v1-0_z13-15',
    filename: 'mangrove_aboveground_biomass_2009_v1-0_z13-15',
    source: {
      type: 'raster',
      minzoom: 13,
      maxzoom: 15
    },
    render: {
      minzoom: 13
    }
  },
  {
    name: 'biomass_2010_v1-0_z0-12',
    filename: 'mangrove_aboveground_biomass_2010_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
    render: {
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'biomass_2010_v1-0_z13-15',
    filename: 'mangrove_aboveground_biomass_2010_v1-0_z13-15',
    source: {
      type: 'raster',
      minzoom: 13,
      maxzoom: 15
    },
    render: {
      minzoom: 13
    }
  },
  {
    name: 'biomass_2015_v1-0_z0-12',
    filename: 'mangrove_aboveground_biomass_2015_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
  },
  {
    name: 'biomass_2016_v1-0_z0-12',
    filename: 'mangrove_aboveground_biomass_2016_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
  },
  // The only year with basal height, ignored for now
  {
    name: 'basal_height_2000_v1-2_z0-13',
    filename: 'mangrove_basal-area_weighted_height_2000_v1-2_z0-13',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 13
    }
  },
  {
    name: 'height_1996_v1-0_z0-12',
    filename: 'mangrove_max_canopy_height_1996_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
  },
  {
    name: 'height_2000_v1-2_z0-13',
    filename: 'mangrove_max_canopy_height_2000_v1-2_z0-13',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 13
    }
  },
  {
    name: 'height_2007_v1-0_z0-12',
    filename: 'mangrove_max_canopy_height_2007_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'height_2008_v1-0_z0-12',
    filename: 'mangrove_max_canopy_height_2008_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'height_2009_v1-0_z0-12',
    filename: 'mangrove_max_canopy_height_2009_v1-0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'height_2010_v1-0_z0-15',
    filename: 'mangrove_max_canopy_height_2010_v1-0_z0-15',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 15
    },
  },
  {
    name: 'height_2015_v1-0_z0-15',
    filename: 'mangrove_max_canopy_height_2015_v1-0_z0-15',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 15
    }
  },
  {
    name: 'height_2016_v1-0_z0-15',
    filename: 'mangrove_max_canopy_height_2016_v1-0_z0-15',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 15
    }
  },
  {
    name: 'gmw1996v2_0_z0-12',
    filename: 'gmw1996v2_0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gmw2007v2_0_z0-12',
    filename: 'gmw2007v2_0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gmw2008v2_0_z0-12',
    filename: 'gmw2008v2_0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gmw2009v2_0_z0-12',
    filename: 'gmw2009v2_0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gmw2010v2_0_z0-12',
    filename: 'gmw2010v2_0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gmw2015v2_0_z0-12',
    filename: 'gmw2015v2_0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gmw2016v2_0_z0-12',
    filename: 'gmw2016v2_0_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'toc_co2eha-1_2016_z0z12',
    filename: 'toc_co2eha-1_2016_z0z12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_1996_2007_loss_z0-12',
    filename: 'gl_1996_2007_loss_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    },
  },
  {
    name: 'gl_2007_1996_gain_z0-12',
    filename: 'gl_2007_1996_gain_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2007_2008_loss_z0-12',
    filename: 'gl_2007_2008_loss_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2008_2007_gain_z0-12',
    filename: 'gl_2008_2007_gain_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2008_2009_loss_z0-12',
    filename: 'gl_2008_2009_loss_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2009_2008_gain_z0-12',
    filename: 'gl_2009_2008_gain_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2009_2010_loss_z0-12',
    filename: 'gl_2009_2010_loss_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2010_2009_gain_z0-12',
    filename: 'gl_2010_2009_gain_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2010_2015_loss_z0-12',
    filename: 'gl_2010_2015_loss_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2015_2010_gain_z0-12',
    filename: 'gl_2015_2010_gain_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2015_2016_loss_z0-12',
    filename: 'gl_2015_2016_loss_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  },
  {
    name: 'gl_2016_2015_gain_z0-12',
    filename: 'gl_2016_2015_gain_z0-12',
    source: {
      type: 'raster',
      minzoom: 0,
      maxzoom: 12
    }
  }
];

const sourcesAndLayers = [...rasters, ...geojsons].reduce((acc, item) => {
  const layers = (item.source.type === 'raster') ? createRasterLayer(item) : [];
  return {
    sources: {
      ...acc.sources,
      ...item.source.type === 'geojson' && {
        [item.id]: item.source
      },
      ...item.source.type === 'raster' && { [`${item.name}-tiles`]: toRasterSource(item) },
    },
    layers: [
      ...acc.layers,
      ...layers,
      ...(item.source.type === 'geojson') ? item.layers : []
    ]
  };
}, { sources: {}, layers: [] });

const layersMap = {
  biomass: [
    {
      layerId: 'biomass_1996_v1-0_z0-12',
      year: 1996,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'biomass_1996_v1-0_z13-15',
      year: 1996,
      minZoom: 13,
      maxZoom: 15
    },
    {
      layerId: 'biomass_2000_v1-2_z0-12',
      year: 2000,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'biomass_2000_v1-2_z13-15',
      year: 2000,
      minZoom: 13,
      maxZoom: 15
    },
    {
      layerId: 'biomass_2007_v1-0_z0-12',
      year: 2007,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'biomass_2007_v1-0_z13-15',
      year: 2007,
      minZoom: 13,
      maxZoom: 15
    },
    {
      layerId: 'biomass_2008_v1-0_z0-12',
      year: 2008,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'biomass_2008_v1-0_z13-15',
      year: 2008,
      minZoom: 13,
      maxZoom: 15
    },
    {
      layerId: 'biomass_2009_v1-0_z0-12',
      year: 2009,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'biomass_2009_v1-0_z13-15',
      year: 2009,
      minZoom: 13,
      maxZoom: 15
    },
    {
      layerId: 'biomass_2010_v1-0_z0-12',
      year: 2010,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'biomass_2010_v1-0_z13-15',
      year: 2010,
      minZoom: 13,
      maxZoom: 15
    },
    {
      layerId: 'biomass_2015_v1-0_z0-12',
      year: 2015,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'biomass_2016_v1-0_z0-12',
      year: 2016,
      minZoom: 0,
      maxZoom: 12
    }
  ],
  height: [
    {
      layerId: 'height_1996_v1-0_z0-12',
      year: 1996,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'height_2000_v1-2_z0-13',
      year: 2000,
      minZoom: 0,
      maxZoom: 13
    },
    {
      layerId: 'height_2007_v1-0_z0-12',
      year: 2007,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'height_2008_v1-0_z0-12',
      year: 2008,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'height_2009_v1-0_z0-12',
      year: 2009,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'height_2010_v1-0_z0-15',
      year: 2010,
      minZoom: 0,
      maxZoom: 15
    },
    {
      layerId: 'height_2015_v1-0_z0-15',
      year: 2015,
      minZoom: 0,
      maxZoom: 15
    },
    {
      layerId: 'height_2016_v1-0_z0-15',
      year: 2016,
      minZoom: 0,
      maxZoom: 15
    }
  ],
  extent: [
    {
      layerId: 'gmw1996v2_0_z0-12',
      year: 1996,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gmw2007v2_0_z0-12',
      year: 2007,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gmw2008v2_0_z0-12',
      year: 2008,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gmw2009v2_0_z0-12',
      year: 2009,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gmw2010v2_0_z0-12',
      year: 2010,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gmw2015v2_0_z0-12',
      year: 2015,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gmw2016v2_0_z0-12',
      year: 2016,
      minZoom: 0,
      maxZoom: 12
    },
  ],
  carbon: [
    {
      layerId: 'toc_co2eha-1_2016_z0z12',
      year: 2016,
      minZoom: 0,
      maxZoom: 12
    }
  ],
  net: [
    {
      layerId: 'gl_1996_2007_loss_z0-12',
      year: 2007,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2007_1996_gain_z0-12',
      year: 2007,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2007_2008_loss_z0-12',
      year: 2008,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2008_2007_gain_z0-12',
      year: 2008,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2008_2009_loss_z0-12',
      year: 2009,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2009_2008_gain_z0-12',
      year: 2009,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2009_2010_loss_z0-12',
      year: 2010,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2010_2009_gain_z0-12',
      year: 2010,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2010_2015_loss_z0-12',
      year: 2015,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2015_2010_gain_z0-12',
      year: 2015,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2015_2016_loss_z0-12',
      year: 2016,
      minZoom: 0,
      maxZoom: 12
    },
    {
      layerId: 'gl_2016_2015_gain_z0-12',
      year: 2016,
      minZoom: 0,
      maxZoom: 12
    },
  ],
  'alerts-heat': [
    {
      layerId: 'alerts-heat',
    },
  ],
  'alerts-point': [
    {
      layerId: 'alerts-point',
    },
  ]
};


export const scopeFeature = new Map([
  ['short', 'ST_Advice'],
  ['medium', 'MT_Advice'],
  ['long', 'LT_Advice']
]);


export default {
  layersMap,

  ...sourcesAndLayers
};
